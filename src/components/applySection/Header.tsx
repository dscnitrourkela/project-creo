import imgs from '@/config/apply'
import { H1, P } from '../ui/typography'

export default function Header() {
  return (
    <div className='flex flex-col items-center pt-10 pb-5 bg-gradient-to-b from-black/60 to-transparent w-full -mt-30'>
      <H1 className=' text-4xl tracking-tight lg:text-4xl font-fort text-white flex gap-3 [@media(max-width:530px)]:text-[1.3rem]'>
        <img src={imgs.leftBolt} alt='' className='w-24 [@media(max-width:530px)]:w-12' />
        <P className='font-fort whitespace-nowrap'>Apply Right Away!</P>
        <img src={imgs.rightBolt} alt='' className='w-24 [@media(max-width:530px)]:w-12' />
      </H1>
      <P className='text-neutral-200  text-md tracking-tight font-gabarito border-0 -mt-0! md:-mt-8!'>
        Prices so cheap even you can’t resist
      </P>
    </div>
  )
}
