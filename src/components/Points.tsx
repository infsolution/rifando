import React from 'react'
import {RImage} from './default/RImage'
import {Badge} from 'reactstrap'
export function Points({points, setShowPoints}){
    return(
        <>
        {
            points && points.map(point=>{
                return(
                    <div key={point.id} className={"position-relative"}  onClick={()=>setShowPoints(point.number)} title={point.number}>
                        { point.profile_id&& 
                        <Badge className={"position-absolute top-2 start-60 bg-light translate-middle p-0 border border-light rounded-circle"}>
                            <RImage src={"/profile-git.jpeg"} alt={""} width={22} height={22} title={point.number}/>
                            </Badge>
                        }            
                    {point.number}
                    </div>         )
            })
        }
        </>
    )
}