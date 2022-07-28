import React, { useContext } from 'react'
import { Raffle, Point } from '../../types/types'
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import { setHeder } from '../../connection/api'
function Raffles({data}){

    return(
        <>
        <Head>
            <title>{data.name}</title>
        </Head>
        {console.log(data)}
        {data && <p>{data.name}</p>}
        </>
    )
}



export  const getServerSideProps: GetServerSideProps = async ( {req, params} ) => {
    if (params===undefined) {
        return {
          notFound: true,
        }
      }
    const fields = `id, name, description, draw_date, point_value, total_points, total_sold, points(id,
         number, point_image, raffle_id, profile_id, paid_out, value, drawn)`
    const raffleId = params.id   
    const {url, options} = setHeder(`id=eq.${raffleId}&select=${fields}`)
    const res = await fetch(url, options)
    const value = await res.json()
    const data:Raffle = value[0] 
    if (data===null) {
        return {
          notFound: true,
        }
      }

    return{
        props:{
            data:data
        }
    }
}

export default Raffles