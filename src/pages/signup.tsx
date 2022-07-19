import React from 'react'
import Head from 'next/head'
import FormSignup from '../components/FormSignup'
function Signup(){
return(
    <>
     <Head>
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
        <title>Rifando - Signup</title>
    </Head>
    Criar conta
    <FormSignup />
    </>
)
}

export default Signup