import { ArrowDownToLine } from 'lucide-react'
import { CARD_BG_1, BROCHURE_LINK } from '@/config/event'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className='w-full'>
      <div className='relative w-full max-w-[90%] sm:max-w-[95%] md:max-w-[89%] mx-auto min-h-48 md:h-100 overflow-hidden rounded-xl '>
        {/* 1 */}
        <div className='absolute inset-0 bg-[#030223] opacity-92 mix-blend-hard-light z-1'></div>
        <div
          className='absolute inset-0 bg-cover bg-center z-2 opacity-92 mix-blend-hard-light'
          style={{
            backgroundImage: `url('${CARD_BG_1}')`,
          }}
        >
          <div
            className='absolute inset-0 mix-blend-hard-light'
            style={{
              background: '#FF14B270',
              boxShadow: '0px 4px 153.5px -20px #FF59C866 inset',
            }}
          />
        </div>

        <div className='relative z-5 md:h-full md:max-h-full md:max-w-[90%] max-w-[76.5%] flex flex-col gap-2 justify-between items-start p-4 sm:px-6  md:px-12 md:py-6.4 text-white'>
          <p className='text-base md:text-[24px] md:mt-4 font-gabarito text-white'>
            Keen to know more?
          </p>
          <h2 className='text-[24px] sm:text-[28px] md:text-[45.9px] font-fort max-w-4xl leading-tight mb-6 md:mb-8 uppercase tracking-wide drop-shadow-lg text-white'>
            Rules and Regulations to get you started
          </h2>

          <Link
            to={BROCHURE_LINK}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-between gap-3 bg-[#030223] px-5 sm:px-8 py-3 md:px-16 md:py-5 w-fit text-white hover:bg-[#030223]/80 transition-all cursor-pointer border-white border-2 md:mb-4'
          >
            <span className='leading-normal md:leading-7 font-inter text-[14px] sm:text-[18px] md:text-[31px] font-bold'>
              Download PDF
            </span>
            <ArrowDownToLine className='w-5 h-5 md:w-7 md:h-7 ' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
