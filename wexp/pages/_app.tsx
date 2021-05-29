import '../styles/globals.css'
//add bootstrap 5.0
import 'bootstrap/dist/css/bootstrap.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
