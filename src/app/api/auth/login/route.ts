import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { compare } from 'bcryptjs'
import { createSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('MccollinsMedia')
    const user = await db.collection('users').findOne({ email })

    if (!user) {
      return NextResponse.json({ error: 'No user found with the email' }, { status: 401 })
    }

    const isMatch = await compare(password, user.password)
    if (!isMatch) {
      return NextResponse.json({ error: 'Password does not match' }, { status: 401 })
    }

    await createSession(user._id.toString(), user.email, user.name || 'Admin')

    return NextResponse.json({ success: true, name: user.name, email: user.email })
  } catch (error: any) {
    console.error('Login API error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
