import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import GlobalLoader from './components/ui/GlobalLoader'
import SEO from './components/seo/SEO'
import { Toaster } from './components/ui/sonner'

const TypographyPage = lazy(() => import('./pages/TypographyPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const Playground = lazy(() => import('./pages/PlaygroundPage'))
const UploadPage = lazy(() => import('./pages/UploadPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <>
      <Toaster position='top-center' richColors />
      <Router>
        <SEO />
        <ReactLenis
          root
          options={{
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 1.5,
          }}
        />
        <Suspense fallback={<GlobalLoader />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/typography' element={<TypographyPage />} />
            <Route path='/playground' element={<Playground />} />
            <Route path='/upload' element={<UploadPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
