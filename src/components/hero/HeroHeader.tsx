import logos from '@/config/logo'

const HeroHeader = () => {
  return (
    <div className='flex items-center gap-6 opacity-90 mb-4 mt-8'>
      <img src={logos.DesignTab} alt='DesignTab' className='h-8 md:h-10 object-contain' />
      <span className='text-xs'>x</span>
      <img src={logos.NES} alt='NES' className='h-3 object-contain' />
      <span className='text-xs'>x</span>
      <img src={logos.ECELL} alt='E-CELL' className='h-3 object-contain' />
      <span className='text-xs'>x</span>
      <img src={logos.SAC} alt='SAC' className='h-8 md:h-10 object-contain' />
    </div>
  )
}

export default HeroHeader
