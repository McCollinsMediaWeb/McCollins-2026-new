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

    const { name } = await req.json()
    if (!name) {
      return NextResponse.json({ error: 'Category name is required.' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const result = await db.collection('blogs-category').insertOne({ name, createdAt: new Date() })
    return NextResponse.json({ success: true, message: 'Category created successfully', id: result.insertedId }, { status: 201 })
  } catch (error: any) {
    console.error('Create Category API error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
    }

    const { id, name } = await req.json()
    if (!id || !name) {
      return NextResponse.json({ error: 'ID and Category name are required.' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const result = await db.collection('blogs-category').updateOne(
      { _id: new ObjectId(id) },
      { $set: { name } }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'No category found with that ID' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Category updated successfully' })
  } catch (error: any) {
    console.error('Update Category API error:', error)
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

    const result = await db.collection('blogs-category').deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'No category found with that ID' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Category deleted successfully' })
  } catch (error: any) {
    console.error('Delete Category API error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
