import { serialize } from 'cookie'
import { NextResponse } from 'next/server'

// Set session cookie manually in the API route
export const setLoginSession = (session: any) => {
  const cookie = serialize('auth_token', JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  })

  // Return proper JSON response with Set-Cookie header
  const response = NextResponse.json({ message: 'Login successful' })
  response.headers.set('Set-Cookie', cookie)
  return response
}

// Get session from cookies
export const getLoginSession = (cookies: any) => {
  const token = cookies.auth_token
  if (!token) return null
  try {
    const session = JSON.parse(token)
    return session
  } catch (error) {
    return null
  }
}
