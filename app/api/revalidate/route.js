import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const body = await request.json()
  const { _type } = body

  if (_type === 'project' || _type === 'section' || _type === 'siteSettings') {
    revalidateTag('project')
    revalidateTag('navigation')
    revalidateTag('settings')
    return NextResponse.json({ revalidated: true, now: Date.now() })
  }

  return NextResponse.json({ revalidated: false })
}
