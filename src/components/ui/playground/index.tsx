import { Link } from 'react-router-dom'
import { Button } from '../button'
import { H1, H4 } from '../typography'

export default function PlaygroundContent() {
  return (
    <>
      <div className='py-10 space-y-10 max-w-7xl mx-auto'>
        <H1 className='text-4xl font-bold font-gabarito'>Welcome to Project Creo</H1>
        <div className='flex gap-4'>
          <Button variant={'default'}>Button Test</Button>
          <Button asChild variant='outline'>
            <Link to='/typography'>View Typography System</Link>
          </Button>
          <Button asChild variant='outline'>
            <Link to='/upload'>Upload Assets</Link>
          </Button>
        </div>
        <H4 className=''>Add your components below</H4>
      </div>
      <div className='w-full border-b-2 border-black border-dashed'></div>
    </>
  )
}
