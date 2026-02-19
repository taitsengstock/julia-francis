import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { navigationQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import Navigation from './Navigation'

export default async function Sidebar() {
  const [sections, settings] = await Promise.all([
    client.fetch(navigationQuery, {}, { next: { tags: ['navigation'] } }),
    client.fetch(siteSettingsQuery, {}, { next: { tags: ['settings'] } }),
  ])

  return (
    <>
      {settings?.headerText && (
        <div className="header">
          <Link href="/"><p>{settings.headerText}</p></Link>
        </div>
      )}
      <Navigation sections={sections || []} />
      {settings?.footerText && (
        <div className="footer">
          <p>{settings.footerText}</p>
        </div>
      )}
    </>
  )
}
