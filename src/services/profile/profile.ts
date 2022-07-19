import supabase from "../../connection/supabase"


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