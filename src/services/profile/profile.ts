import supabase from "../../connection/supabase"
import {Profile} from '../../types/types'

export const signUp = async (data: {[x:string]:any})=>{
    
    try {
        let {user, error} = await supabase.auth.signUp({
            email:data.email,
            password:data.password
        })
        if(error) return error
        if(user){
            const profile = await supabase.from('profiles').insert([
              { name: data.name, user_id: user.id},  
            ])
            if(profile){
                return profile
            }
        }
    } catch (error) {
        console.log(error)
    }
}


export const getProfile = async (id:string):Promise<Profile|null|undefined>=>{
    try{
        const { data: profiles, error } = await supabase.from('profiles')
        .select("*").eq('user_id', id)
        if(error) return null
        if(profiles){
            const profile = {
                id:profiles[0].id,
                name: profiles[0].name,
                profile_image: profiles[0].profile_image?profiles[0].profile_image:'',
                user_id:profiles[0].user_id,
                rating:profiles[0].rating
            }
            return profile
        }     
    }catch(error){
        return null
    }
}