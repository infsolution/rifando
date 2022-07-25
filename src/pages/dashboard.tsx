
import React, { useContext } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import {GetServerSideProps} from 'next'
import { UserData, Raffle } from '../types/types'
import withAuth from '../wrapper/withAuth'
import {FormRaffle} from '../components/FormRaffle'
import {TableRaffles} from '../components/TableRaffles'
import { parseCookies } from 'nookies'
import { getAll } from '../services/raffles/raffles'

function Dashboard (raffles:Raffle[]){

    return(
        <>
        <Head>
            <title>Dashboard</title>
        </Head>
        <div className='container' >
            <FormRaffle />
            <TableRaffles raffles={raffles}/>

        </div>
        
        
        </>
    )
}
export default withAuth(Dashboard)

export  const getServerSideProps: GetServerSideProps = async ( {req} ) => {
    const {'rfd-token': token} = parseCookies()
    /*if(!token){
        return{
            redirect:{
                destination: '/login',
                permanent: false
            }
        }
    }*/
   const res = await fetch('https://rmwauxdwiuwsoriosegi.supabase.co/rest/v1/raffles?select=*',{
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtd2F1eGR3aXV3c29yaW9zZWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgwNTc0NzEsImV4cCI6MTk3MzYzMzQ3MX0.Kd-OhbTB4t7MlcyOu2MaFGo6TXS4QLu72PX5BGI9Dnc',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtd2F1eGR3aXV3c29yaW9zZWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgwNTc0NzEsImV4cCI6MTk3MzYzMzQ3MX0.Kd-OhbTB4t7MlcyOu2MaFGo6TXS4QLu72PX5BGI9Dnc`
        },
        method: 'GET'
    }) 
   const raffles = await res.json()
       
    return{
        props:{
            raffles:raffles
        }
    }
}