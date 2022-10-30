/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextUIProvider } from '@nextui-org/react'
import { FunctionComponent } from 'react'


function MyApp({ Component, pageProps }: {
  Component: FunctionComponent,
  pageProps: any
}) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
