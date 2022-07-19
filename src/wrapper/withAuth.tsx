import { ElementType, useEffect } from "react";
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { Props } from "../interfaces/Interfaces";

export default function withAuth(WrappedComponent: ElementType){
    const Wrapper = (props: Props) =>{
        const router = useRouter()
        useEffect(()=>{
            const {'rfd-token': token} = parseCookies()
            if(!token){
                router.push('/login')
            }
        }, [])
        
        return <WrappedComponent {...props}/>
    }
    return Wrapper
}