import React from 'react'
import {Raffle} from '../types/types'

export function TableRaffles({raffles}){

	return(
		<>
		<table className="table">
			 <thead>
			 	<tr>
			 		<th>Nome</th>
			 		<th>Data Sorteio</th>
			 		<th>Valor</th>
			 		<th>Pontos vendidos</th>
			 		<th></th>
			 		<th></th>
			 	</tr>
			 </thead>
			 {<tbody>{ raffles && raffles.raffles.map( raffle => {
			 			 	return(
			 			 		<tr key={raffle.id}>
			 			 			<td>{raffle.name}</td>
			 			 			<td>{raffle.draw_date}</td>
			 			 			<td>{raffle.point_value}</td>
			 			 			<td>{raffle.total_sold}</td>
			 			 		</tr>
			 			 		)
			 			 })
			 			 	
			 			 }
			 			 </tbody>}
		</table>
			
		</>
		)
}