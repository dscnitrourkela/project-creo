import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className='py-10 space-y-10 max-w-7xl mx-auto'>
      <h1 className='text-4xl font-bold font-gabarito'>Welcome to Project Creo</h1>
      <div className='flex gap-4'>
        <Button asChild variant='outline'>
          <Link to='/playground'>Go to Playground</Link>
        </Button>
      </div>
    </main>
  )
}
