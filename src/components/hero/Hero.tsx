import imgs from '@/assets/imgs/HomePage'
import logos from '@/assets/imgs/logo'
import Countdown from './Countdown'
import NavBar from '../navbar/NavBar'
import { EffectScene } from '../glitcheffect/effect-scene'

function Hero() {
  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-black text-white font-sans'>
      <EffectScene image={imgs.homebackgorundandLayer} />

      {/*Secondary Background*/}
      <div className='absolute inset-0 z-10 opacity-20'>
        <img
          src={imgs.background}
          alt='Background Texture'
          className='w-full h-full object-fill opacity-100 mix-blend-color-dodge blur-xs grayscale'
        />
      </div>

      {/* Floating Elements decoration */}
      <div className='absolute -top-45 -left-30 z-20 pointer-events-none w-48 sm:w-[200px] md:w-[400px]'>
        <img src={imgs.topcorner} alt='' className='w-full object-contain opacity-17' />
      </div>
      <div className='absolute -top-45 -right-40 z-20 pointer-events-none w-48 sm:w-[200px] md:w-[400px]'>
        <img src={imgs.topcorner} alt='' className='w-full object-contain opacity-17' />
      </div>

      {/* Bottom  */}
      <div className='absolute -bottom-70 -right-35 z-20 pointer-events-none w-50 sm:w-[200px] md:w-[500px]'>
        <img src={imgs.bottomcorner} alt='Hand' className='w-full object-cover blur-[3px]' />
      </div>
      <div className='absolute -bottom-70 -left-35 rotate-y-180 z-20 pointer-events-none w-50 sm:w-[200px] md:w-[500px]'>
        <img src={imgs.bottomcorner} alt='Hand' className='w-full object-cover blur-[3px]' />
      </div>

      {/* Flying Elements - Butterflies */}
      <div className='absolute top-5 left-60 -rotate-45 hidden md:block w-32 md:w-42 z-20 opacity-80 animate-pulse delay-700 pointer-events-none'>
        <img src={imgs.leftsideflying} alt='Butterfly Left' className='w-full object-contain' />
      </div>
      <div className='absolute top-5 right-60 rotate-45 hidden md:block w-32 md:w-42 z-20 opacity-80 animate-pulse delay-1000 pointer-events-none'>
        <img src={imgs.rightsideflying} alt='Butterfly Right' className='w-full object-contain' />
      </div>

      {/* Content Container */}
      <div className='relative z-30 flex flex-col items-center justify-between w-full min-h-screen px-4 overflow-y-auto md:overflow-hidden'>
        {/* NavBar - Top on Mobile, Bottom on Desktop */}
        <div className='w-full md:absolute mb-3 md:bottom-1 md:left-0 md:px-8 z-50 transition-all duration-300'>
          <NavBar />
        </div>

        {/* Header / Logos */}
        <div className='flex items-center gap-6 opacity-90 mb-4 mt-2 '>
          <img src={logos.DesignTab} alt='DesignTab' className='h-8 md:h-10 object-contain' />
          <span className='text-xs'>x</span>
          <img src={logos.NES} alt='NES' className='h-3 object-contain' />
          <span className='text-xs'>x</span>
          <img src={logos.ECELL} alt='E-CELL' className='h-3 object-contain' />
          <span className='text-xs'>x</span>
          <img src={logos.SAC} alt='SAC' className='h-8 md:h-10 object-contain' />
        </div>

        {/* Main Hero Text */}
        <div className='flex flex-col items-center text-center space-y-2 mt-4 md:mt-0 shrink-0'>
          <p className='text-xs font-fort md:text-sm tracking-[0.3em] uppercase mb-10 md:mb-6'>
            Presents
          </p>

          {/* Stylized Title */}
          {/* Main Logo */}
          <div className='mb-10 md:mb-6'>
            <img
              src={logos.Creo26}
              alt="CREO '26"
              className='h-24 md:h-32 object-contain mx-auto'
            />
          </div>

          {/* Glitchy/Bold Text */}
          <div className='flex flex-col items-center justify-center -space-y-2 md:-space-y-4'>
            <h2 className='font-fort font-normal text-[18px] sm:text-[18px] md:text-[50px] leading-none tracking-[-0.03em] text-center uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,20,178,0.5)] opacity-60'>
              Create With No Limitations
            </h2>
            <h2 className='font-fort font-normal text-[24px] sm:text-[36px] md:text-[69.59px] leading-none tracking-[-0.03em] text-center uppercase text-[rgba(255,20,178,1)] drop-shadow-[0_0_10px_rgba(255,20,178,0.5)] z-10'>
              Create With No Limitations
            </h2>
            <h2 className='font-fort font-normal text-[18px] sm:text-[20px] md:text-[50px] leading-none tracking-[-0.03em] text-center uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,20,178,0.5)] opacity-60'>
              Create With No Limitations
            </h2>
          </div>
        </div>

        {/* Info Grid */}
        <div className='flex flex-wrap justify-center gap-8 md:gap-52 text-center mt-12 mb-10 md:mt-6 md:mb-2 shrink-0'>
          <div>
            <p className='text-xs font-gabarito uppercase tracking-widest mb-1'>Date</p>
            <p className='text-lg font-bold font-fort'>1st - 2nd FEB</p>
          </div>
          <div>
            <p className='text-xs font-gabarito uppercase tracking-widest mb-1'>Destination</p>
            <p className='text-lg font-bold font-fort'>NIT ROURKELA</p>
          </div>
          <div>
            <p className='text-xs font-gabarito uppercase tracking-widest mb-1'>Duration</p>
            <p className='text-lg font-bold font-fort'>36 HOUR</p>
          </div>
        </div>

        {/* Countdown */}
        <Countdown />

        {/* Bottom Navigation */}
        <div className='w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mt-auto pt-10 gap-4 shrink-0'></div>
      </div>
    </div>
  )
}

export default Hero
