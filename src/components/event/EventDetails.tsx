import React from 'react'
import { EVENT_DETAILS } from '@/assets/config/event'
import { BOLT_ICON } from '@/assets/imgs/event'
import Card from './Card'
import { P } from '../ui/typography'

interface EventDetailsTemplateProps {
  number: string
  title: string
  description: string
}

const EventDetailsTemplate: React.FC<EventDetailsTemplateProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className='flex flex-col gap-1 text-white font-gabarito'>
      <div className='text-[32px] md:text-[40px] font-100'>{number}</div>
      <div className='w-[89%]  h-px bg-white opacity-50 my-1'></div>
      <div className='text-[32px] md:text-[40px] uppercase tracking-wider font-fort'>{title}</div>
      <P className='text-[#C6C6C6] leading-6 text-[16px] md:text-[24px]'>{description}</P>
    </div>
  )
}

const EventDetails = () => {
  return (
    <>
      <div className='bg-[#080505] min-h-screen w-full relative'>
        <div className='flex items-center gap-2 p-4 md:p-8 text-white font-fort text-[32px] md:text-[54px] flex-row justify-center pt-10 md:pt-28.75'>
          <div className='flex justify-between w-full max-w-87.5 md:max-w-157.25 items-center'>
            <img src={BOLT_ICON} alt='left bolt' className='h-12 md:h-auto' />
            <div className='flex gap-2 md:gap-4 whitespace-nowrap'>
              EVENT <span className='text-[#FF14B2]'>DETAILS</span>
            </div>
            <img src={BOLT_ICON} alt='right bolt' className='scale-x-[-1] h-12 md:h-auto' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-16 px-5 lg:px-12 max-w-7xl mx-auto pt-10 md:pt-32.5'>
          {EVENT_DETAILS.map((detail) => (
            <EventDetailsTemplate
              key={detail.id}
              number={detail.number}
              title={detail.title}
              description={detail.description}
            />
          ))}
        </div>
      </div>
      <Card />
    </>
  )
}

export default EventDetails
