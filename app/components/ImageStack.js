import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export default function ImageStack({ images }) {
  return (
    <div className="images">
      {images.map((img, i) => {
        const url = urlFor(img).width(1200).url()
        const width = img.asset?.metadata?.dimensions?.width || 1200
        const height = img.asset?.metadata?.dimensions?.height || 800

        return (
          <div key={img._key || i}>
            <div className="picture">
              <Image
                src={url}
                alt={img.alt || img.title || ''}
                width={width}
                height={height}
                sizes="(max-width: 736px) 100vw, 800px"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            {(img.title || img.caption) && (
              <div className="captioning">
                {img.title && <div className="title">{img.title}</div>}
                {img.caption && <div className="caption">{img.caption}</div>}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
