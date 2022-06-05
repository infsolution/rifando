import React from 'react'
import Head from 'next/head'
import {FormLogin} from '../components/FormLogin'
function Login(){
return(
    <>
     <Head>
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
        <title>Rifando - Login</title>
    </Head>
    <FormLogin/>
    </>
)
}

export default Login