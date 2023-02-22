import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Dashboard</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="shortcut icon" href="/assets/icon-512.png" />
          <link rel="apple-touch-icon" href="/assets/icon-512.png" />
          <link rel="shortcut icon" href="/assets/favicon.png" />
          <link rel="apple-touch-icon" href="/assets/favicon.png" />
          <meta name="description" content="Controle de Gastos" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#7551FF" />
        </Head>

        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
