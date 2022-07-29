import supabase from '../../connection/supabase'
import {Raffle} from '../../types/types'
import { TPoint } from '../../types/types'

export const createRaffle = async (dataRaffle: {[x:string]:any})=>{

	try{
		const {data, error} = await supabase.from('raffles').insert([
    { name: dataRaffle.name, description: dataRaffle.description, draw_date:dataRaffle.draw_date,
     owner:1, point_value:dataRaffle.price,
     total_points:dataRaffle.total_points}
  ])
		if(error) return error
		if(data){
			const totalPoints:TPoint[] = []
			const raffle:Raffle = data[0]
			for(let i: number=1; i<= raffle.total_points;i++){
				totalPoints.push({
					number:i,
					raffle_id:raffle.id??0,
					value:raffle.point_value??0,
				})
			}
			const points = await supabase.from('points').insert(totalPoints)
		}

		return data
	}catch(error){
		console.log(error)	
	}
}

export const getAll = async ():Promise<Raffle[] | null>=>{
	try{
		let { data: raffles, error } = await supabase.from('raffles').select('*').range(0, 9)
		console.log("In getAll",error)
		if(error) return null
		return raffles
	}catch(error){
		console.log(error)
		return null
	}
}

export const fetchGetRaffles = async ()=>{
	try{

	}catch(error){
		
	}
}