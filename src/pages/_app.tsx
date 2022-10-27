import React from 'react'
import Router from 'next/router'
import Script from 'next/script'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'
import { LazyMotion, domAnimation } from 'framer-motion'

import '../scss/styles.scss'
import 'locomotive-scroll/dist/locomotive-scroll.css'

NProgress.configure({
  showSpinner: false,
  easing: 'ease',
  speed: 1000,
})

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeError', () => NProgress.done())

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Component {...pageProps} key={router.route} />
    </LazyMotion>
  )
}

export default MyApp
