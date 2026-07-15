import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { getSession } from '@/lib/auth'
import { ObjectId } from 'mongodb'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (!body || !body.email || !(body.name || body.firstName)) {
      return NextResponse.json({ error: 'Name and email are required fields' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const submission = {
      ...body,
      createdAt: new Date()
    }

    const result = await db.collection('formSubmit').insertOne(submission)

    return NextResponse.json({ success: true, message: 'Form submitted successfully', id: result.insertedId })
  } catch (error: any) {
    console.error('Form submit API error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
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

    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const result = await db.collection('formSubmit').deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'No submission found with that ID' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Submission deleted successfully' })
  } catch (error: any) {
    console.error('Delete form submit API error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
