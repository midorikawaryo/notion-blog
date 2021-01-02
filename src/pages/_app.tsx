import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import * as gtag from '../lib/gtag'
import React, { useEffect } from 'react'
import { Router } from 'next/router'

export default ({ Component, pageProps }) => {
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }

    const handleRouteChange = (path: any) => {
      gtag.pageview(path)
    }

    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <React.Fragment>
      <Component {...pageProps} /> <Footer />
    </React.Fragment>
  )
}
