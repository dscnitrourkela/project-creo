import logos from '@/config/logo'

const HeroTitle = () => {
  return (
    <div className='flex flex-col items-center text-center space-y-2 mt-4 md:mt-0 shrink-0'>
      <p className='text-xs font-fort md:text-sm tracking-[0.3em] uppercase mb-10 md:mb-6'>
        Presents
      </p>

      <div className='mb-10 md:mb-6'>
        <img src={logos.Creo26} alt="CREO '26" className='h-24 md:h-32 object-contain mx-auto' />
      </div>

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
  )
}

export default HeroTitle
