import { client } from '@/sanity/lib/client'
import { projectBySlugQuery, allSlugsQuery } from '@/sanity/lib/queries'
import ProjectContent from '../../components/ProjectContent'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await client.fetch(allSlugsQuery)
  return slugs.map((slug) => ({ slug }))
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = await client.fetch(
    projectBySlugQuery,
    { slug },
    { next: { tags: ['project'] } }
  )

  if (!project) {
    notFound()
  }

  return <ProjectContent project={project} />
}
