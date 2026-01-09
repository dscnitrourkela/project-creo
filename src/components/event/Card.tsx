import { ArrowDownToLine } from 'lucide-react'
import { CARD_BG_1, CARD_BG_2 } from '@/assets/imgs/event'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className='bg-[#080505] py-20 md:py-40'>
      <div className='relative w-full max-w-[90%] md:max-w-[89%] mx-auto min-h-100 md:h-100 overflow-hidden rounded-xl md:rounded-2xl'>
        <div
          className='absolute inset-0 bg-cover bg-center z-0 opacity-92 mix-blend-hard-light'
          style={{
            backgroundImage: `url('${CARD_BG_1}')`,
          }}
        >
          {/* <div className='absolute inset-0 bg-linear-to-r from-transparent to-black' /> */}
          <div
            className='absolute inset-0 mix-blend-hard-light'
            style={{
              background: '#FF14B270',
              boxShadow: '0px 2px 193.5px -20px #FF59C866 inset',
            }}
          />
        </div>
        <div
          className='absolute inset-0 bg-cover bg-center z-0 mix-blend-hard-light opacity-39'
          style={{
            backgroundImage: `url('${CARD_BG_2}')`,
          }}
        >
          <div className='absolute inset-0 bg-linear-to-r from-black/40 to-transparent' />
        </div>
        <div className='relative z-10 h-full flex flex-col justify-center px-6 py-10 md:py-0 md:px-12 text-white'>
          <p className='text-base md:text-[24px] mb-2 md:mb-4 font-gabarito text-white'>
            Know to more
          </p>
          <h2 className='text-[28px] md:text-[52px] font-fort max-w-4xl leading-tight mb-6 md:mb-8 uppercase tracking-wide drop-shadow-lg text-white'>
            Rules and Regulations to <br className='hidden md:block' /> get you started
          </h2>

          <Link
            to={{
              pathname: '/',
              search: '?query=string',
              hash: '#hash',
            }}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-between gap-3 bg-[#030223] px-8 py-3 md:px-16 md:py-5 w-fit my-3 md:my-5 text-white hover:bg-[#030223]/80 transition-all cursor-pointer border-white border-2'
          >
            <span className='leading-normal md:leading-7 font-inter text-[20px] md:text-[31px] font-bold'>
              Download PDF
            </span>
            <ArrowDownToLine className='w-5 h-5 md:w-7 md:h-7 stroke-[1.8]' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
