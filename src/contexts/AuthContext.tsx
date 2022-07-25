import React, { useState } from "react";
import { createContext } from "react";
import {AuthContextType, User, Profile} from  '../types/types'
import {Props} from '../interfaces/Interfaces'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import supabase from "../connection/supabase";
import { useRouter } from 'next/router'
import {getProfile} from '../services/profile/profile'


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: Props){
    const [profile, setProfile] = useState<Profile| null>(null)
    const [loged, setLoged] = React.useState<boolean>(false)
    const router = useRouter()

    async function signIn(data: {[x:string]:any}) {
            let {session, user, error} = await supabase.auth.signIn({
                email:data.email,
                password:data.password
            })
            if(user){
                 const profile = await getProfile(user.id)
                 if(profile){
                     setProfile(profile)    
                 }
            }
        if(session){
            setCookie(undefined, 'rfd-token ', session.access_token,{maxAge: 3600})
            setLoged(true)
        }
       
        router.push('/dashboard')
    }


    async function logout(){
        try {
            let { error } = await supabase.auth.signOut()
            destroyCookie(null, 'rfd-token')
            setProfile(null)
            setLoged(false)
            router.push('/login')
        } catch (error) {
            console.log(error)
        }
    }
   

    React.useEffect(()=>{
        async function autoLogin(){
            const session = supabase.auth.session()
            if(session && session.user){
                 const profile = await getProfile(session.user.id)
                 if(profile){
                     setProfile(profile)    
                 }
                setLoged(true)
            }
        }
        autoLogin()
    },[loged])



    return(
        <AuthContext.Provider value={{profile, loged, signIn, logout}}>
            {children}
        </AuthContext.Provider>
    )
}