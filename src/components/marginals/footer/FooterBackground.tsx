import { imgs } from '@/config/marginals/footer'

const FooterBackground = () => {
  return (
    <>
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: `url('${imgs.starPattern}')`,
          backgroundSize: '100px 100px',
          backgroundRepeat: 'repeat',
          pointerEvents: 'none',
        }}
      />

      <div
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: `url('${imgs.bgImage}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
        }}
      />

      <div
        className='absolute bottom-0 left-0 right-0 w-full h-full'
        style={{
          backgroundImage: `url('${imgs.earth}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
          boxShadow: '0 2px 98px -20px #FF59C8 inset',
        }}
      />

      <div className='absolute inset-0 bg-gradient-to-br from-pink-900/80 via-fuchsia-900/80 to-purple-900/80 mix-blend-multiply' />
    </>
  )
}

export default FooterBackground
