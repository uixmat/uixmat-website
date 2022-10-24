import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import CookieConsent from 'react-cookie-consent'

interface Props {
  title?: string
  children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'uixmat',
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
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>

      <div data-scroll-container ref={containerRef}>
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

      <CookieConsent
        location="bottom"
        buttonText="&times;"
        acceptOnScroll={true}
      >
        <span>
          🍪 This website uses cookies to enhance the user experience.{' '}
          <a href="/privacy" target="_blank">
            Read more
          </a>
        </span>
      </CookieConsent>
    </LocomotiveScrollProvider>
  )
}

export default Layout
