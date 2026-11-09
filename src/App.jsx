import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
// Portfolio hidden until real case studies are ready (see PRD.md).
// import Portfolio from './pages/Portfolio.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="*" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
