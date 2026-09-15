import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { ObjectId } from 'mongodb'
import { splitFullName, submitToHubSpot } from '@/lib/hubspot'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (!body || !(body.name || body.firstName)) {
      return NextResponse.json({ error: 'Name is a required field' }, { status: 400 })
    }

    const submission = {
      ...body,
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
    let hubspotSubmitted = false
    try {
      const hubspotResult = await submitToHubSpot(req, {
        kind: 'contact',
        fields: [
          { name: 'firstname', value: firstname },
          { name: 'lastname', value: lastname },
          { name: 'email', value: String(body.email || '') },
          { name: 'phone', value: String(body.contact || body.phone || '') },
          { name: 'company', value: String(body.company || '') },
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

    // Forward to Make.com webhook
    try {
      await fetch("https://hook.eu1.make.com/usozfxfmwb6y35v0ss4jw5goebu9ghm4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(body.email || ''),
          firstname: firstname,
          lastname: lastname,
          company: String(body.company || ''),
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
