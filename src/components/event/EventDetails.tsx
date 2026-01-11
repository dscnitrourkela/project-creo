import React from 'react'
import { EVENT_DETAILS } from '@/assets/config/event'
import { BOLT_ICON, BG_PAGE_1, BG_PAGE_2 } from '@/assets/imgs/event'
import Card from './Card'
import './event.css'
// import { P } from '../ui/typography'

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
  const [isMobile, setIsMobile] = React.useState(false)
  // const [isBigger, setIsBigger] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) //window.innerHeight
    }
    // const check2ndCase = () => {
    //   setIsBigger(window.innerWidth > 1465)
    // }

    checkMobile()
    // check2ndCase()
    window.addEventListener('resize', checkMobile)
    // window.addEventListener('resize', check2ndCase)

    return () => {
      window.removeEventListener('resize', checkMobile)
      // window.removeEventListener('resize', check2ndCase)
    }
  }, [])

  return (
    <>
      <div>
        <div
          className='min-h-screen w-full relative bg-cover bg-no-repeat bg-[#030223] hi'
          style={{
            backgroundImage: `
            radial-gradient(34.66% 34.66% at 50% 65.34%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.44) 100%),
            linear-gradient(180.03deg, rgba(0, 0, 0, 0.99) 37.62%, rgba(0, 0, 0, 0) 99.97%),
            url('${BG_PAGE_1}'),
            url('${BG_PAGE_2}')
          `,
            backgroundPosition: isMobile
              ? 'center -170px, center -300px, center -180px, center 1400px'
              : // : isBigger
                // ? 'center -400px, center -580px, center -600px, center 1478px'
                'center -400px, center -300px, center -400px, center 1478px',
          }}
        >
          <div className='flex items-center gap-2 p-1.48 md:p-8 text-white font-fort text-[24px] md:text-[54px] flex-row justify-center pt-10 md:pt-28.75'>
            <div className='flex justify-between w-full max-w-87.5 md:max-w-157.25 items-center'>
              <img src={BOLT_ICON} alt='left bolt' className='h-12 md:h-auto' />
              <div className='flex items-center gap-2 md:gap-4 whitespace-nowrap text-white'>
                <span>EVENT</span>
                <span className='text-[#FF14B2]'>DETAILS</span>
              </div>
              <img src={BOLT_ICON} alt='right bolt' className='scale-x-[-1] h-12 md:h-auto' />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-16 px-5 lg:px-10 max-w-[90%] sm:max-w-[95%] md:max-w-[90%] mx-auto pt-10 md:pt-20'>
            {EVENT_DETAILS.map((detail) => (
              <EventDetailsTemplate
                key={detail.id}
                number={detail.number}
                title={detail.title}
                description={detail.description}
              />
            ))}
          </div>
          <Card />
        </div>
      </div>
    </>
  )
}

export default EventDetails
