import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { parseCookies } from 'nookies'
import { createRaffle } from '../services/raffles/raffles'
export function FormRaffle(){
	const { register, handleSubmit } = useForm();
	const {'rfd-token': token} = parseCookies()

	 async  function handleSingIn(data: {[x:string]:any}){
       try {
       	if(token){
           const riffle = await createRaffle(data)    
       	}
       } catch (error) {
           console.log(error)
       }
       
    }

	return (
		<>
			 <div className='container'>
			  <form onSubmit = { handleSubmit(handleSingIn) }>
			 	<div className="form-outline mb-4">
                    <input type="text" id="form2Example1" className="form-control" {...register('name')}/>
                    <label className="form-label" >Dê um nome especial para sua rifa</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="form2Example1" className="form-control" {...register('description')}/>
                    <label className="form-label" >Fale um pouco sobre sua rua</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="date" id="form2Example1" className="form-control" {...register('draw_date')}/>
                    <label className="form-label" >Quando será o sorteio?</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="number" id="form2Example1" className="form-control" {...register('total_points')}/>
                    <label className="form-label" >Quantos pontos tem a rifa?</label>
                </div>
                 <div className="form-outline mb-4">
                    <input type="number" id="form2Example1" className="form-control" {...register('price')}/>
                    <label className="form-label" >Quanto custa cada ponto?</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Criar</button>
              </form>      
			 </div>
			 
		</>
		)
}