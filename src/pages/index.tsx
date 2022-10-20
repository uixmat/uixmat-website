import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

//  Components
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Recommended from '../components/Recommended'
import Repository from '../components/Repository'

function HomePage() {
  const containerRef = useRef(null)
  return (
    <Layout title="uixmat - Creative Developer & Designer">
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          tablet: {
            smooth: true,
            breakpoint: 768,
          },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef}>
          <Hero />
          <Intro />
          <Skills />
          <Experience />
          <Recommended />
          <Repository />
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}

export default HomePage
