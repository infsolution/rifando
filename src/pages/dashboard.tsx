
import React, { useContext } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { UserData } from '../types/types'
import withAuth from '../../wrapper/withAuth'

function Dashboard ({email}:UserData){

    return(
        <>
        <Head>
            <title>Dashboard</title>
        </Head>
        
        </>
    )
}
export default withAuth(Dashboard)