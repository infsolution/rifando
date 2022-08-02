import supabase from '../../connection/supabase'
import { TPoint } from '../../types/types'
export const updatePoint = async (numbers:number[], profileId: number, raffleId: number):Promise<boolean>=>{
    const totalPoints = []
    try {
        Promise.all( numbers.map( async num=>{
            const { data, error } = await supabase.from('points').update({ profile_id: profileId })
            .match({'number':num,'raffle_id':raffleId })
            if(error) throw new Error(error.message)
        })
    ) 
    return true
    } catch (error) {
        console.log(error)
        return false
    }
}