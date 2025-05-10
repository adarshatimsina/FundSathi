import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { setLoginSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing email or password' }, { status: 400 })
    }

    const getUserQuery = `
      SELECT user_id, password_hash, first_name, last_name 
      FROM users 
      WHERE email = $1
    `
    const { rows } = await query(getUserQuery, [email])

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 })
    }

    const user = rows[0]
    const isPasswordValid = await bcrypt.compare(password, user.password_hash)

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 })
    }

    const session = {
      user_id: user.user_id,
      first_name: user.first_name,
      last_name: user.last_name,
    }

    return setLoginSession(session)

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Something went wrong during login' }, { status: 500 })
  }
}
