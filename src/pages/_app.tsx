/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, NextUIProvider } from '@nextui-org/react'
import Navbar from 'components/Navbar'
import { FunctionComponent } from 'react'
import { theme } from 'utils/theme'


function MyApp({ Component, pageProps }: {
  Component: FunctionComponent,
  pageProps: any
}) {
  return (
    <NextUIProvider theme={theme}>
      <Navbar />
      <Container css={{
        position: 'absolute',
        top: 0,
        // background: '$linearGradient',
        minWidth: '100vw',
        minHeight: '100vh',
        opacity: 0.5
      }}>
        <Component {...pageProps} />
      </Container>
    </NextUIProvider>
  )
}

export default MyApp
