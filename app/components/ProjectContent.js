import { PortableText } from 'next-sanity'
import ImageStack from './ImageStack'

export default function ProjectContent({ project }) {
  const images = project.images?.length > 0 ? (
    <ImageStack images={project.images} />
  ) : null

  const body = project.body?.length > 0 ? (
    <div className="body">
      <PortableText value={project.body} />
    </div>
  ) : null

  if (project.imagesFirst === false) {
    return (
      <>
        {body}
        {images}
      </>
    )
  }

  return (
    <>
      {images}
      {body}
    </>
  )
}
