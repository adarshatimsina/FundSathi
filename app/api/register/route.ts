import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  try {
    const { first_name, last_name, email, phone_number, password, profile_picture_url } = await req.json()

    console.log('📥 Received registration data:', { first_name, last_name, email, phone_number, password, profile_picture_url });

    // Check if email already exists
    const checkEmailQuery = `SELECT email FROM users WHERE email = $1`
    const emailCheckResult = await query(checkEmailQuery, [email])

    if (emailCheckResult.rows.length > 0) {
      console.log('⚠️ Email already exists:', email);
      return NextResponse.json(
        { error: 'Email already exists. Please use a different one.' },
        { status: 400 }
      )
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log('🔐 Hashed password:', hashedPassword)

    // Insert user into database
    const insertQuery = `
      INSERT INTO users (first_name, last_name, email, phone_number, password_hash, profile_picture_url)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING user_id
    `
    const values = [first_name, last_name, email, phone_number, hashedPassword, profile_picture_url]
    
    const result = await query(insertQuery, values)

    // Retrieve just-inserted password_hash
    const checkHash = await query(`SELECT password_hash FROM users WHERE user_id = $1`, [result.rows[0].user_id])
    console.log('✅ Stored password hash in DB:', checkHash.rows[0].password_hash)

    console.log('✅ User successfully registered with user_id:', result.rows[0].user_id)

    return NextResponse.json(
      { message: 'User registered successfully', user_id: result.rows[0].user_id },
      { status: 201 }
    )
  } catch (error) {
    console.error('❌ Error during registration:', error)
    return NextResponse.json({ error: 'Something went wrong during registration' }, { status: 500 })
  }
}
