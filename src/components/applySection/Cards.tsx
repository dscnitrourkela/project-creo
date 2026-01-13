import { useState } from 'react'
import ApplyCard from './ApplyCard'

export default function Cards() {
  const [activeCard, setActiveCard] = useState<'Early' | 'Regular'>('Early')

  return (
    <div className='flex w-full overflow-visible mt-40 [@media(max-width:703px)]:mt-10 items-center justify-center mx-5 px-5 mb-5 relative'>
      <div className='flex gap-8 flex-wrap justify-center relative'>
        <ApplyCard
          heading='EARLY BIRD REGISTRATION'
          tillDate='15 July'
          price={199}
          registrationType='Early'
          isActive={activeCard === 'Early'}
          onHover={() => setActiveCard('Early')}
        />
        <ApplyCard
          heading='REGULAR REGISTRATION'
          tillDate='15 July'
          price={299}
          registrationType='Regular'
          isActive={activeCard === 'Regular'}
          onHover={() => setActiveCard('Regular')}
        />
      </div>
    </div>
  )
}
