import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { getSession } from '@/lib/auth'
import { ObjectId } from 'mongodb'

export async function POST(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
    }

    const { name, content } = await req.json()
    if (!name || !content) {
      return NextResponse.json({ error: 'Name (page URL) and content are required.' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const result = await db.collection('meta').insertOne({ name, content, createdAt: new Date() })
    return NextResponse.json({ success: true, message: 'Meta tag created successfully', id: result.insertedId }, { status: 201 })
  } catch (error: any) {
    console.error('Create Meta API error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
    }

    const { id, name, content } = await req.json()
    if (!id || !name || !content) {
      return NextResponse.json({ error: 'ID, Name, and Content are required.' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const result = await db.collection('meta').updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, content } }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'No meta tag found with that ID' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Meta tag updated successfully' })
  } catch (error: any) {
    console.error('Update Meta API error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
    }

    const { id } = await req.json()
    if (!id) {
      return NextResponse.json({ error: 'ID is required.' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const result = await db.collection('meta').deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'No meta tag found with that ID' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Meta tag deleted successfully' })
  } catch (error: any) {
    console.error('Delete Meta API error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
