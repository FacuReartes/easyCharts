import { FC } from 'react'
import { ElementInterface } from '../context/Context'

const ElementsItems: FC<ElementInterface> = (props) => {
  return (
    <div style={{ border: `2px solid ${props.color}` }}
      className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center flex-col items-center w-[25%] rounded-lg'>
      <h2 className='text-lg font-bold p-1'>{props.name}</h2>
      <p className='pb-1'>{props.value}</p>        
    </div>
  )
}

export default ElementsItems