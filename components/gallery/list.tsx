import GalleryGrid from './gallery-grid'
import { getImagesWithPlaceholders } from './actions/getImages'

export type SearchResult = {
  base64: string | undefined
  public_id: string
  tags: string[]
  url: string
}

export default async function List() {
  const img = await getImagesWithPlaceholders()

  return <GalleryGrid images={img} />
}
