'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation({ sections }) {
  const pathname = usePathname()

  return (
    <nav>
      {sections.map((section) => {
        const hasActiveProject = section.projects?.some(
          (p) => pathname === `/${p.slug?.current}`
        )

        return (
          <ul className="section" key={section._id}>
            <span
              className={`section-title${hasActiveProject ? ' active' : ''}`}
            >
              {section.title}
            </span>
            {section.projects?.map((project) => {
              const href = `/${project.slug?.current}`
              const isActive = pathname === href

              return (
                <li className="exhibit-title" key={project._id}>
                  <Link
                    href={href}
                    className={isActive ? 'active' : ''}
                  >
                    {project.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        )
      })}
    </nav>
  )
}
