import { NextRequest, NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (!body || !(body.firstName || body.name)) {
      return NextResponse.json({ error: 'First name is required' }, { status: 400 })
    }

    const submission = {
      ...body,
      inquiryType: 'Careers',
      source: body.source || 'Careers Page Application',
      page: body.page || 'careers',
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
        console.error('MongoDB career application storage error:', error)
      }
    }

    // NOTE: Careers applications are strictly isolated:
    // 1. No HubSpot lead sync
    // 2. No Make.com sales webhook
    // 3. No email notifications to info@mccollinsmedia.com

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      id: insertedId
    })
  } catch (error: unknown) {
    console.error('Careers submit API error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}
