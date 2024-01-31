import React from 'react'

type Props = {name: string, value: number, color: string}

//ARREGLAR QUE SE VE ORRIBLE EN DESKTOP
//TAMBIEN VER EL TEMA DEL TEXTO QUE CAMBIE SEGUN BG COLOR

function ElementsItems({name, value, color}: Props) {
  return (
    <div style={{ border: `2px solid ${color}` }}
      className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center flex-col items-center w-[25%] rounded-lg'>
      <h2 className='text-lg font-bold p-1'>{name}</h2>
      <p className='pb-1'>{value}</p>        
    </div>
  )
}

export default ElementsItems