'use server'

import { unstable_cache as cache } from 'next/cache'
import cloudinary from 'cloudinary'
import { SearchResult } from '../list'
// import { dynamicBlurDataUrl } from '@/lib/utils'

export async function getImagesWithPlaceholders() {
  const imageCache = cache(
    async () => {
      const result = (await cloudinary.v2.search
        .expression('folder:recipes')
        .sort_by('public_id', 'asc')
        .max_results(20)
        .execute()) as {
        rate_limit_remaining: number
        resources: SearchResult[]
      }

      console.log(
        'Fetching images ⚠️ - Remaining API calls:',
        result.rate_limit_remaining
      )

      // Obtener placeholders en paralelo
      //   const imagesWithPlaceholders = await Promise.all(
      //     result.resources.map(async (resource) => {
      //       // Usar versión optimizada de la imagen para el placeholder
      //       const optimizedUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${resource.public_id}`

      //       const base64 = await dynamicBlurDataUrl(optimizedUrl)

      //       return {
      //         ...resource,
      //         base64
      //       }
      //     })
      //   )

      return result.resources
    },
    ['images-with-placeholders'],
    {
      revalidate: 14400, // 4 horas para los datos principales
      tags: ['images-cache']
    }
  )

  return await imageCache()
}
