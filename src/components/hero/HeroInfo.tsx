const HeroInfo = () => {
  return (
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
  )
}

export default HeroInfo
