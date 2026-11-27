import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { ObjectId } from 'mongodb'
import { splitFullName, submitToHubSpot } from '@/lib/hubspot'
import { verifyRecaptcha } from '@/lib/recaptcha'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // 1. Honeypot check - silently drop bot submissions without sending emails or alerts
    if (body?.b_website_hp || body?.honeypot) {
      console.warn('[Anti-Spam] Bot submission dropped via honeypot trap:', body?.email || body?.name)
      return NextResponse.json({ success: true, message: 'Form submitted successfully' })
    }

    // 2. Cryptographic reCAPTCHA verification
    if (!(await verifyRecaptcha(req, body?.recaptchaToken))) {
      return NextResponse.json({ error: 'CAPTCHA verification failed. Please try again.' }, { status: 403 })
    }
    if (!body || !(body.name || body.firstName)) {
      return NextResponse.json({ error: 'Name is a required field' }, { status: 400 })
    }

    const formFields = { ...body }
    delete formFields.recaptchaToken
    delete formFields.b_website_hp
    delete formFields.honeypot
    const submission = {
      ...formFields,
      createdAt: new Date()
    }

    let insertedId: ObjectId | undefined
    if (process.env.MONGODB_URI) {
      try {
        const { default: clientPromise } = await import('@/lib/mongodb')
        const client = await clientPromise
        const db = client.db('MccollinsMedia')
        const result = await db.collection('formSubmit').insertOne(submission)
        insertedId = result.insertedId
      } catch (error) {
        console.error('MongoDB form storage error:', error)
      }
    }

    const { firstname, lastname } = splitFullName(String(body.firstName || body.name || ''))
    const isCareerApplication = String(body.inquiryType || '').toLowerCase() === 'careers'
    let hubspotSubmitted = false
    if (!isCareerApplication) {
      try {
        const hubspotResult = await submitToHubSpot(req, {
          kind: 'contact',
          fields: [
            { name: 'firstname', value: firstname },
            { name: 'lastname', value: lastname },
            { name: 'email', value: String(body.email || '') },
            { name: 'phone', value: String(body.contact || body.phone || '') },
            { name: 'company', value: String(body.company || '') },
            { name: 'companyWebsite', value: String(body.companyWebsite || '') },
            { name: 'jobtitle', value: String(body.jobTitle || '') },
            { name: 'message', value: String(body.text || body.message || '') },
            { name: 'service_interested', value: String(body.services || '') },
          ],
          pageName: String(body.source || body.page || 'Website contact form'),
          pageUri: String(body.pageUrl || ''),
        })
        hubspotSubmitted = hubspotResult.submitted
      } catch (error) {
        console.error('HubSpot contact sync error:', error)
      }
    }

    // Forward to Make.com webhook (exclude careers)
    if (!isCareerApplication) {
      try {
        await fetch("https://hook.eu1.make.com/usozfxfmwb6y35v0ss4jw5goebu9ghm4", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: String(body.email || ''),
            firstname: firstname,
            lastname: lastname,
            company: String(body.company || ''),
            companyWebsite: String(body.companyWebsite || ''),
            phone: String(body.contact || body.phone || ''),
            service: String(body.services || ''),
            jobtitle: String(body.jobTitle || ''),
            message: String(body.text || body.message || ''),
            source: String(body.source || body.page || 'Contact Page'),
            pageUrl: String(body.pageUrl || ''),
          }),
        })
      } catch (makeError) {
        console.error('Make.com webhook sync error:', makeError)
      }

      // Forward to Google Apps Script for email notifications (ONLY after reCAPTCHA verification passes!)
      try {
        const scriptData = new FormData();
        scriptData.append("Firstname", firstname);
        scriptData.append("Email", String(body.email || ''));
        scriptData.append("Phone", String(body.contact || body.phone || ''));
        scriptData.append("Contact", String(body.contact || body.phone || ''));
        scriptData.append("Company", String(body.company || ''));
        scriptData.append("Services", String(body.services || ''));
        scriptData.append("jobTitle", String(body.jobTitle || ''));
        scriptData.append("InquiryType", String(body.inquiryType || 'business'));
        scriptData.append("Message", String(body.text || body.message || ''));
        scriptData.append("page", String(body.page || ''));
        scriptData.append("pageUrl", String(body.pageUrl || ''));
        scriptData.append("Url", String(body.pageUrl || ''));
        scriptData.append("source", String(body.source || body.page || 'Contact Page'));

        await fetch("https://script.google.com/macros/s/AKfycbxmDwaT4Le95NuEGMeviV3p_ofzhwfqW6w7TDLttjg0N2n0NdkRNHiPYBVt20eI4VgVKg/exec", {
          method: "POST",
          body: scriptData,
        });
      } catch (scriptErr) {
        console.error('Server Google Apps Script forwarding error:', scriptErr);
      }
    }

    return NextResponse.json({ success: true, message: 'Form submitted successfully', id: insertedId, hubspotSubmitted })
  } catch (error: unknown) {
    console.error('Form submit API error:', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized. You must be signed in to delete submissions.' }, { status: 401 })
    }

    const { id } = await req.json()
    if (!id) {
      return NextResponse.json({ error: 'Submission ID is required' }, { status: 400 })
    }

    const { default: clientPromise } = await import('@/lib/mongodb')
    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const result = await db.collection('formSubmit').deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'No submission found with that ID' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Submission deleted successfully' })
  } catch (error: unknown) {
    console.error('Delete form submit API error:', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
