import { NextRequest, NextResponse } from 'next/server'
import { getLoginSession } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const cookies = req.cookies
  const session = getLoginSession(cookies)

  if (!session) {
    return NextResponse.json({ loggedIn: false }, { status: 200 })
  }

  return NextResponse.json({
    loggedIn: true,
    user: session,
  })
}
