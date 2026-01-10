import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useProgress } from '@react-three/drei'
import imgs from '@/config/hero'
import logos from '@/config/logo'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const { progress: current3DProgress } = useProgress()
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [imgProgress, setImgProgress] = useState(0)

  useEffect(() => {
    const imageUrls = [...Object.values(imgs), ...Object.values(logos)].filter(
      (url) => typeof url === 'string',
    )

    let loadedCount = 0
    const totalImages = imageUrls.length

    if (totalImages === 0) {
      setImgProgress(100)
      setImagesLoaded(true)
      return
    }

    imageUrls.forEach((url) => {
      const img = new Image()
      img.src = url
      img.onload = () => {
        loadedCount++
        setImgProgress(Math.round((loadedCount / totalImages) * 100))
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
        }
      }
      img.onerror = () => {
        loadedCount++
        setImgProgress(Math.round((loadedCount / totalImages) * 100))
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
        }
      }
    })
  }, [])

  useEffect(() => {
    const totalProgress = Math.min(Math.round((imgProgress + current3DProgress) / 2), 100)

    setProgress(totalProgress)
  }, [imgProgress, current3DProgress])

  useEffect(() => {
    if (progress === 100 && imagesLoaded) {
      const timer = setTimeout(() => {
        onComplete()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [progress, imagesLoaded, onComplete])

  return (
    <motion.div
      className='fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white overflow-hidden'
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <div className='relative'>
        <h1 className='font-fort text-[80px] md:text-[150px] leading-none tracking-tighter tabular-nums'>
          {progress}%
        </h1>

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
        Initializing System...
      </div>

      {/* Loading Bar */}
      <div className='absolute bottom-0 left-0 w-full h-1 bg-[#222]'>
        <motion.div
          className='h-full bg-[rgba(255,20,178,1)] shadow-[0_0_10px_rgba(255,20,178,0.8)]'
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
        />
      </div>
    </motion.div>
  )
}
