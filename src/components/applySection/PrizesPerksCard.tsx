import { H4, P } from '../ui/typography'
import Line from './Line'

interface cardProps {
  heading: string
  cardType: 'Early' | 'Perks'
  isActive: boolean
  onHover: () => void
}

function PrizesPerksCard({ heading, isActive, onHover }: cardProps) {
  return (
    <div
      className={`relative flex flex-col flex-wrap text-white h-fit transition-all duration-500 ease-in-out z-40 overflow-hidden rounded-[13px] backdrop-blur-sm ${
        isActive ? 'w-full  bg-[#822059]/80 shadow-2xl' : ''
      } `}
      onMouseEnter={onHover}
      style={{
        boxShadow: isActive ? '0 2px 98px -20px #FF59C8 inset' : undefined,
      }}
    >
      <div
        className='absolute inset-0 rounded-md pointer-events-none opacity-30 mix-blend-overlay'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className='relative z-10 flex flex-col p-5 pb-2'>
        <H4 className='flex flex-col font-fort'>{heading}</H4>
      </div>

      <div className=' my-2'>
        <Line />
      </div>

      <div className='px-10 py-5 h-fit'>
        <ul style={{ listStyle: 'initial' }}>
          <li>
            <P className='flex '>
              <P>&#8377;45,000 total prize pool including cash prizes</P>
            </P>
          </li>
          <li>
            <P>
              Exclusive CREO 26
              <b>&nbsp;merchandise and goodies, certificates for top 5 teams</b>
            </P>
          </li>
          <li>
            <P>
              <b>Social media recognition</b>
              &nbsp;on the official Design Tab Instagram page
            </P>
          </li>
          <li>
            <P>
              Live online <b>interaction with senior designers</b>&nbsp;from top companies
            </P>
          </li>
          <li>
            <P>
              <b>Access to direct mentorship sessions</b>&nbsp; with experienced industry and many
              more
            </P>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PrizesPerksCard
