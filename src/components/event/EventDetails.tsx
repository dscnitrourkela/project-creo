import React from 'react'
import { EVENT_DETAILS } from '@/config/event'
import { BOLT_ICON, BG_PAGE_1 } from '@/config/event'

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
      <div className='text-[24px] md:text-[40px] font-100'>{number}</div>
      <div className='w-[89%]  h-px bg-white opacity-50 my-1'></div>
      <div className='text-[24px] md:text-[40px] uppercase tracking-wider font-fort'>{title}</div>
      <div className='text-[#C6C6C6] leading-6 text-[14px] md:text-[24px]'>{description}</div>
    </div>
  )
}

const EventDetails = () => {
  return (
    <>
      <div id='event-details'>
        <div
          className='w-full relative bg-cover bg-no-repeat bg-[#030223] min-h-screen'
          style={{
            backgroundImage: `
            radial-gradient(34.66% 34.66% at 50% 65.34%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.44) 100%),
            linear-gradient(180.03deg, rgba(0, 0, 0, 0.7) 37.62%, rgba(0, 0, 0, 0) 99.97%),
            url('${BG_PAGE_1}')
          `,
            backgroundPosition: 'center, center, center',
          }}
        >
          <div className='absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-10' />
          <div className='relative z-20 flex items-center gap-2 p-1.48 md:p-8 text-white font-fort text-[24px] md:text-[54px] flex-row justify-center pt-10'>
            <div className='flex justify-between w-full max-w-87.5 md:max-w-157.25 items-center'>
              <img src={BOLT_ICON} alt='left bolt' className='h-12 md:h-auto' />
              <div className='flex items-center gap-2 md:gap-4 whitespace-nowrap text-white'>
                <span>EVENT</span>
                <span className='text-[#FF14B2]'>DETAILS</span>
              </div>
              <img src={BOLT_ICON} alt='right bolt' className='scale-x-[-1] h-12 md:h-auto' />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-16 px-5 lg:px-10 max-w-[90%] sm:max-w-[95%] md:max-w-[90%] mx-auto pt-10 md:pt-20 pb-40 md:pb-60'>
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
      </div>
    </>
  )
}

export default EventDetails
