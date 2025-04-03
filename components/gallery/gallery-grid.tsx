'use client'

import { CldImage } from 'next-cloudinary'
import { ImageGrid } from './image-grid'
import { SearchResult } from './list'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'

export default function GalleryGrid({
  images
}: {
  images: (SearchResult & { base64?: string })[]
}) {
  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between items-center'>
          <Heading
            title='Ghiblol'
            description='A collection of beautiful illustrations made by Ghiblo.'
          />
          <div className='flex gap-2 items-center'>
            <Input placeholder='Image...' />
            <Button>
              <SearchIcon />
              <span className='sr-only'>Search</span>
              Search
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
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
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}
