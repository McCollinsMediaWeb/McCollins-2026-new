import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { hash } from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json()

    if (!email || !email.includes('@') || !password) {
      return NextResponse.json({ error: 'Invalid details' }, { status: 422 })
    }

    const client = await clientPromise
    const db = client.db('MccollinsMedia')

    const existingUser = await db.collection('users').findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 422 })
    }

    const hashedPassword = await hash(password, 12)
    const result = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
      name: name || 'Admin',
      createdAt: new Date()
    })

    return NextResponse.json({ success: true, message: 'User created', userId: result.insertedId }, { status: 201 })
  } catch (error: any) {
    console.error('Signup API error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
