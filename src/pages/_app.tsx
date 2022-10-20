import React from 'react'
import Router from 'next/router'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'
import { LazyMotion, domAnimation } from 'framer-motion'

import '../scss/styles.scss'
import 'locomotive-scroll/dist/locomotive-scroll.css'

NProgress.configure({
  showSpinner: false,
  easing: 'ease',
  speed: 500,
})

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeError', () => NProgress.done())

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <Component {...pageProps} key={router.route} />
    </LazyMotion>
  )
}

export default MyApp
