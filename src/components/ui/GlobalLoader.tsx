import { motion } from 'framer-motion'

export default function GlobalLoader() {
  return (
    <div className='fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white overflow-hidden'>
      <div className='relative'>
        {/* Loading Text */}
        <h1 className='font-fort text-[40px] md:text-[80px] leading-none tracking-tighter tabular-nums animate-pulse'>
          LOADING...
        </h1>

        {/* Glitch Overlay Effect */}
        <motion.div
          className='absolute inset-0 bg-black mix-blend-overlay'
          animate={{
            clipPath: [
              'inset(10% 0 80% 0)',
              'inset(80% 0 5% 0)',
              'inset(30% 0 30% 0)',
              'inset(10% 0 80% 0)',
            ],
            x: [-2, 2, -1, 1, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      </div>

      <div className='mt-4 text-xs font-gabarito uppercase tracking-[0.2em] opacity-60'>
        Fetching Resources...
      </div>

      {/* Indeterminate Loading Bar */}
      <div className='absolute bottom-0 left-0 w-full h-1 bg-[#222] overflow-hidden'>
        <motion.div
          className='absolute h-full bg-[rgba(255,20,178,1)] shadow-[0_0_10px_rgba(255,20,178,0.8)]'
          initial={{ left: '-100%', width: '100%' }}
          animate={{ left: '100%' }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  )
}
