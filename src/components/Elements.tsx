import React, { useContext } from 'react'
import Context from '../context/Context'
import ElementsItems from './ElementsItems';

type Props = {}

function Elements({}: Props) {

  const { element, setElement } = useContext(Context) || { gasto: null, setGasto: () => {} };

  return (

    //CENTRAR MEJOR LOS ELEMENTOS
    <div className='flex justify-center gap-5 flex-wrap'>
        {element.map((x: any) => (
            <ElementsItems name={x.name} value={x.value} color={x.color}/>
        ))}
    </div>
  )
}

export default Elements