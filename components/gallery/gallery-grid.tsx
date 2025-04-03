'use client'

import { CldImage } from 'next-cloudinary'
import { ImageGrid } from './image-grid'
import { SearchResult } from './list'

export default function GalleryGrid({
  images
}: {
  images: (SearchResult & { base64?: string })[]
}) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CldImage
            key={imageData.public_id}
            src={imageData.public_id}
            quality={20}
            width='400'
            height='300'
            className='rounded-lg'
            alt={`Image ${imageData.public_id}`}
          />
        )
      }}
    />
  )
}
