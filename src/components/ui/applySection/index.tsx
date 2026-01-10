import imgs from '@/assets/imgs/ApplySection'

function ApplySection() {
  const handleEarlyRegistration = async () => {}

  const handleRegularRegistration = async () => {}

  return (
    <div
      className={`min-h-screen bg-[url('${imgs.bg}')] bg-center bg-no-repeat bg-cover bg-black flex flex-col items-center min-w-scren overflow-x-hidden`}
    >
      <h1 className='scroll-m-20 text-4xl tracking-tight lg:text-4xl font-fort text-white flex items-center gap-3 [@media(max-width:530px)]:text-[1.3rem]'>
        <img src={imgs.leftBolt} alt='' className='w-18 [@media(max-width:530px)]:w-12' />
        <p>Apply Right Away!</p>
        <img src={imgs.rightBolt} alt='' className='w-18 [@media(max-width:530px)]:w-12' />
      </h1>
      <h2
        className='text-neutral-200 scroll-m-20 text-md tracking-tight font-gabarito -mt-1
'
      >
        Prices so cheap even you can’t resist
      </h2>
      <div className='flex w-full overflow-visible mt-40 [@media(max-width:703px)]:mt-10 items-center justify-center mx-5 px-5 mb-5 relative'>
        <img
          src={imgs.blurCube}
          alt=''
          className='absolute left-1/2 -translate-x-[calc(50%+20.9rem)] top-1/2 -translate-y-1/5 w-56 z-10'
        />
        <div className='flex gap-6 flex-wrap justify-center z-80 relative'>
          <div className='flex flex-col flex-wrap text-white border h-fit w-80 rounded-md backdrop-blur-sm hover:bg-[#a2327570] duration-300'>
            {' '}
            {/* card 1 */}
            <div className='flex flex-col border-b-2 p-5 pb-2 border-dashed'>
              <div className='flex flex-col font-fort'>EARLY BIRD REGISTRATION</div>
              <div>Till 15 July</div>
            </div>
            <div className='flex flex-col p-5 pb-5'>
              <div className='flex gap-3 items-baseline'>
                <div className='text-4xl font-semibold'>₹199</div>
                <div>Per person</div>
              </div>
              <button
                className='self-start bg-black mt-10 px-5 py-2 border cursor-pointer'
                onClick={handleEarlyRegistration}
              >
                Register now
              </button>
            </div>
          </div>
          <div className='flex flex-col flex-wrap text-white border h-fit w-80 rounded-md backdrop-blur-sm hover:bg-[#a2327570] duration-300'>
            {' '}
            {/* card 2 */}
            <div className='flex flex-col border-b-2 p-5 pb-2 border-dashed'>
              <div className='flex flex-col font-fort'>REGULAR REGISTRATION</div>
              <div>Till 15 July</div>
            </div>
            <div className='flex flex-col p-5 pb-5'>
              <div className='flex gap-3 items-baseline'>
                <div className='text-4xl font-semibold'>₹299</div>
                <div>Per person</div>
              </div>
              <button
                className='self-start bg-black mt-10 px-5 py-2 border cursor-pointer'
                onClick={handleRegularRegistration}
              >
                Register now
              </button>
            </div>
          </div>
        </div>
        <img
          src={imgs.normalCube}
          alt=''
          className=' absolute left-1/2 translate-x-[calc(50%+7rem)] top-1/8 -translate-y-1/2 w-56 z-10'
        />
      </div>
    </div>
  )
}

export default ApplySection
