import React, { useContext } from 'react'
import { Raffle, TPoint } from '../../types/types'
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import { setHeder } from '../../connection/api'
import { Points } from '../../components/Points'
import {RImage} from '../../components/default/RImage'
import { RCarousel } from '../../components/default/RCarousel'
import { UncontrolledCarousel } from 'reactstrap'
import styles from '../../styles/Raffle.module.css'
function Raffles({data}){

    return(
        <>
        <Head>
            <title>{data.name}</title>
        </Head>
        { data &&  <div className={'container'}>
        <UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: '1',
      src: 'https://picsum.photos/id/123/1200/600'
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: '2',
      src: 'https://picsum.photos/id/456/1200/600'
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: '3',
      src: 'https://picsum.photos/id/678/1200/600'
    }
  ]}
 />
         <p>{data.name}</p>
        <p>{data.description}</p>
        
          {data.points && <div className={styles.flexContainer}><Points points={data.points}/></div>}
            
        
        </div>
        }
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