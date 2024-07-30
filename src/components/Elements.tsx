import { FC, useContext } from 'react'
import { ElementContext, ContextInterface, ElementInterface } from '../context/Context'
import ElementsItems from './ElementsItems';
// Container for the elements
const Elements: FC = () => {

  // Get list of elements - Maps them into HTML
  const { element } = useContext(ElementContext) as ContextInterface;

  return (
    <div className='flex justify-center gap-5 flex-wrap'>
        {element.map((x: ElementInterface) => (
            <ElementsItems name={x.name} value={x.value} color={x.color}/>
        ))}
    </div>
  )
}

export default Elements