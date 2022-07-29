import React from 'react'
import {RImage} from './default/RImage'
export function Points({points}){
    return(
        <>
        {
            points && points.map(point=>{
                return(
                    <div key={point.id}>
                        <RImage src={"/profile-git.jpeg"} alt={""} width={16} height={16} title={point.number}/>            
                    {point.number}
                    </div>               )
            })
        }
        </>
    )
}