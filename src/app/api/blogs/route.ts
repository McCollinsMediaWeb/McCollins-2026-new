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

    const body = await req.json()
    const {
      title,
      SEOtitle,
      date,
      blogUrl,
      category,
      author,
      photo,
      video,
      tags,
      keywords,
      description,
      shortContent,
      content,
      arabicTitle,
      arabicDescription,
    } = body

    if (!title || !blogUrl) {
      return NextResponse.json({ error: 'Title and Blog URL are required.' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const newBlog = {
      title: title || '',
      SEOtitle: SEOtitle || '',
      date: date || '',
      blogUrl: blogUrl || '',
      category: category || '',
      author: author || '',
      photo: photo || '',
      video: video || '',
      tags: tags || '',
      keywords: keywords || '',
      description: description || '',
      shortContent: shortContent || '',
      content: content || '',
      arabicTitle: arabicTitle || '',
      arabicDescription: arabicDescription || '',
      createdAt: new Date(),
    }

    const result = await db.collection('blogs').insertOne(newBlog)
    return NextResponse.json({ success: true, message: 'Blog created successfully', id: result.insertedId }, { status: 201 })
  } catch (error: any) {
    console.error('Create Blog API error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
    }

    const body = await req.json()
    const { id, ...updateFields } = body

    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required.' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const result = await db.collection('blogs').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateFields }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'No blog found with that ID' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Blog updated successfully' })
  } catch (error: any) {
    console.error('Update Blog API error:', error)
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
      return NextResponse.json({ error: 'Blog ID is required.' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const result = await db.collection('blogs').deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'No blog found with that ID' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' })
  } catch (error: any) {
    console.error('Delete Blog API error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
