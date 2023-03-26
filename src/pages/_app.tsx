/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, NextUIProvider } from '@nextui-org/react'
import Navbar from 'components/Navbar'
import { FunctionComponent } from 'react'
import { theme } from 'utils/theme'
import './global.css'


function MyApp({ Component, pageProps }: {
  Component: FunctionComponent,
  pageProps: any
}) {
  return (
    <NextUIProvider theme={theme}>
      <Navbar />
      <Grid.Container
        css={{
          minWidth: '100vw',
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
        }}
        gap={0}
      >
        <Component {...pageProps} />
      </Grid.Container>
    </NextUIProvider>
  )
}

export default MyApp
