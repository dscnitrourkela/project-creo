import imgs from '@/config/apply'

import Header from './Header'
import Cards from './Cards'

function ApplySection() {
  return (
    <div id='apply-section' className='relative overflow-hidden py-20'>
      <div className='min-h-screen flex flex-col items-center relative'>
        <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-240 z-0'
          style={{
            backgroundImage: `url('${imgs.bg}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            pointerEvents: 'none',
          }}
        ></div>

        <img src={imgs.blurCube} alt='' className='absolute bottom-10 left-0 w-40 md:w-80 z-10' />
        <img
          src={imgs.normalCube}
          alt=''
          className='absolute top-40 md:top-10 right-0 w-40 md:w-80 z-10'
        />

        <div className='relative z-20 flex flex-col items-center w-full'>
          <Header />
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default ApplySection
