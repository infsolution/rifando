import { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import Navbar from "../components/Navbar";
import theme from '../styles/theme'
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, [])
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <AuthProvider>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Navbar />
          </div>
        </div>
      <div className="row">
        <div className="col-sm-2">

        </div>
        <div className="col-sm-8">
          <Component {...pageProps} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
footer
        </div>
      </div>
      <div className="col-sm-2">

        </div>
      </div>
    </AuthProvider>
 
    </>
  )
}

export default MyApp
