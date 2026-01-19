const HeroInfo = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto text-center mt-12 mb-10 md:mt-6 md:mb-2 shrink-0 items-center justify-items-center'>
      <div>
        <p className='text-xs font-gabarito uppercase tracking-widest mb-1'>Date</p>
        <p className='text-lg font-bold font-fort'>31st Jan - 1st FEB</p>
      </div>
      <div>
        <p className='text-xs font-gabarito uppercase tracking-widest mb-1'>Destination</p>
        <p className='text-lg font-bold font-fort'>NIT ROURKELA</p>
      </div>
      <div>
        <p className='text-xs font-gabarito uppercase tracking-widest mb-1'>Duration</p>
        <p className='text-lg font-bold font-fort'>24 HOUR</p>
      </div>
    </div>
  )
}

export default HeroInfo
