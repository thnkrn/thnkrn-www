import type { AppProps } from 'next/app'
import '../styles/styles.scss'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
