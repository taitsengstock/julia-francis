import { client } from '@/sanity/lib/client'
import { homeProjectQuery } from '@/sanity/lib/queries'
import ProjectContent from '../components/ProjectContent'

export default async function HomePage() {
  const project = await client.fetch(homeProjectQuery, {}, { next: { tags: ['project'] } })

  if (!project) {
    return <p>No home page set. Create a project with "Is Home Page" enabled in the Studio.</p>
  }

  return <ProjectContent project={project} />
}
