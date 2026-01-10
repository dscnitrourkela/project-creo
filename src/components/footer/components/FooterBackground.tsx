import { imgs } from '@/config/marginals/footer'

const FooterBackground = () => {
  return (
    <>
      {/* Background Image (Car is embedded in this image) */}
      <img
        src={imgs.bgImage}
        alt='Footer background'
        className='absolute inset-0 w-full h-full object-cover '
        width='100%'
        height='100%'
      />

      {/* COLOR OVERLAY */}
      <div className='absolute inset-0 bg-gradient-to-br from-pink-900/80 via-fuchsia-900/80 to-purple-900/80 mix-blend-multiply' />

      {/* Glow border */}
      <div className='absolute inset-0 rounded-t-[28px] ring-1 ring-pink-500 shadow-[inset_0_0_20px_var(--color-pink-500)]' />
    </>
  )
}

export default FooterBackground
