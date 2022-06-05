import React, { useState } from "react";
import { createContext } from "react";
import {AuthContextType, User} from  '../types/types'
import {Props} from '../interfaces/Interfaces'
import { parseCookies, setCookie } from 'nookies'
import supabase from "../pages/api/supabase";
import { useRouter } from 'next/router'

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}: Props){
    const token = '';
    const [user, setUser] = useState<User>({
        name:'',
        email:'',
        avatar_url:''
    });
    const router = useRouter()
    const isAuthenticated = !!user;

    async function signIn(data: {[x:string]:any}) {
            let {session, user, error} =await supabase.auth.signIn({
                email:data.email,
                password:data.password
            })
            console.log(session)
        if(user){
            setUser({
                name:'',
                email:user.email?user.email:'',
                avatar_url:''
            });
        }
        if(session){
            setCookie(undefined, 'rfd-token ', session.access_token,{maxAge: 3600})
        }
       
        router.push('/')
    }
   

    React.useEffect(()=>{
        const {'rfd-token': token} = parseCookies()
    },[])
    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}