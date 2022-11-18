import '../styles/globals.css'
import "@mappedin/mappedin-js/lib/esm/renderer/index.css";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
