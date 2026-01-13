import { Button } from '../ui/button'
import { H4, P } from '../ui/typography'
import Line from './Line'
import { registerFn } from '@/utils/registerFn'

interface cardProps {
  heading: string
  tillDate: string
  price: number
  registrationType: 'Early' | 'Regular'
  isActive: boolean
  onHover: () => void
}

function ApplyCard({ heading, tillDate, price, isActive, onHover }: cardProps) {
  return (
    <div
      className={`relative flex flex-col flex-wrap text-white h-full md:h-[270px] transition-all duration-500 ease-in-out z-40 overflow-hidden rounded-[13px] backdrop-blur-sm ${
        isActive ? 'w-full md:w-[30rem] bg-[#822059]/80 shadow-2xl' : 'w-full md:w-[25rem]  '
      } `}
      onMouseEnter={onHover}
      style={{
        boxShadow: isActive ? '0 2px 98px -20px #FF59C8 inset' : undefined,
      }}
    >
      <div
        className='absolute inset-0 rounded-md pointer-events-none opacity-30 mix-blend-overlay'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className='relative z-10 flex flex-col p-5 pb-2'>
        <H4 className='flex flex-col font-fort'>{heading}</H4>
        <P className='mt-0!'>{tillDate}</P>
      </div>

      <div className=' my-2'>
        <Line />
      </div>

      <div className='relative z-10 flex flex-col p-5 pt-2'>
        <div className='flex gap-3 items-baseline'>
          <P className='text-4xl font-semibold'>₹{price}</P>
          <P>Per person</P>
        </div>
        <Button
          className='self-start bg-black mt-10 px-5 py-5 border cursor-pointer hover:bg-zinc-900 transition-colors rounded-none text-[1.15rem]'
          onClick={registerFn}
        >
          Register now
        </Button>
      </div>
    </div>
  )
}

export default ApplyCard
