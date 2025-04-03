import List from '@/components/gallery/list'

export default function Home() {
  return (
    <>
      <header className=' flex h-20 shrink-0 items-center gap-2 border-b bg-background px-4 mb-4'>
        <h1 className='text-2xl font-bold'>Studio-memelii</h1>
      </header>
      <div className='my-20'></div>
      <section className='max-w-screen-2xl mx-auto px-8 py-4'>
        <h2 className='text-xl font-bold p-2'>Gallery</h2>
        <List />
      </section>
    </>
  )
}
