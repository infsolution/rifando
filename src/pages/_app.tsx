import Head from "next/head";
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </>
  )
}

export default MyApp
