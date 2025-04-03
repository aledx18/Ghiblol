import List from '@/components/gallery/list'
import { Button } from '@/components/ui/button'
import { GithubIcon } from 'lucide-react'

export default function Home() {
  return (
    <>
      <header className='flex px-4 shrink-0 items-center justify-end bg-background my-2'>
        <Button asChild variant='secondary'>
          <a href='https://github.com/aledx18' target='_blank' rel='noreferrer'>
            <GithubIcon />
            <p>@aledx18</p>
          </a>
        </Button>
      </header>
      <div className='my-10' />
      <section className='mx-12 mb-10'>
        <List />
      </section>
    </>
  )
}
