import { useRef } from 'react'

//  Components
import Layout from '../components/common/Layout'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Recommended from '../components/Recommended'
import Repository from '../components/Repository'
import Footer from '../components/Footer'

function HomePage() {
  const containerRef = useRef(null)
  return (
    <Layout title="uixmat - Creative Developer & Designer">
      <div data-scroll-container ref={containerRef}>
        <Hero />
        <Intro />
        <Skills />
        <Experience />
        <Recommended />
        <Repository />
        <Footer />
      </div>
    </Layout>
  )
}

export default HomePage
