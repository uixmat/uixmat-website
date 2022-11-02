import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Cross from '../../assets/cross.svg'
import Header from './Header'

interface Props {
  title?: string
  description?: string
  children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'uixmat',
  description = 'Personal portfolio of Creative Developer & Designer - Matt Litherland',
}: Props) => {
  const containerRef = useRef(null)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 15, stiffness: 150 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  })

  const { asPath } = useRouter()

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[asPath]}
      containerRef={containerRef}
      onLocationChange={(scroll: any) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="robots" content="all" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uixmat.dev" />
        <meta
          property="og:image"
          content="https://uixmat.dev/images/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@uixmat" />
        <meta name="twitter:creator" content="@uixmat" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://uixmat.dev/images/twitter-image.png"
        />
        <meta name="twitter:image:width" content="800" />
        <meta name="twitter:image:height" content="418" />
      </Head>

      <div data-scroll-container ref={containerRef}>
        <Header />
        {children}
      </div>

      <motion.div
        id="cursor"
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        transition={{ duration: 2 }}
      />
    </LocomotiveScrollProvider>
  )
}

export default Layout
