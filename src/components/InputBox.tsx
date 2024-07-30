import { FC, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ElementContext, ContextInterface, ElementInterface } from '../context/Context'

// Handles input for creating elements
const InputBox: FC = () => {

  // Get list of elements
  const { element, setElement } = useContext(ElementContext) as ContextInterface;

  const { reset, register, handleSubmit } = useForm<ElementInterface>();

  const onSubmit = (data: ElementInterface) => {
    // Creates new Element based on input data
    const newElement: ElementInterface = {
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      value: data.value,
      color: data.color
    }
    // Add it to existing list
    setElement([...element, newElement]);
    reset();
  }

  return (
    <div className='xl:px-64 lg:px-20 md:px-52 px-5'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-2 justify-between'>

          <label htmlFor='Name'
            className='p-1 relative rounded-md border border-gray-500 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
            <input {...register("name", {
              maxLength: {
                value: 10,
                message: "Max Length of 20 Characters"
              }
            })}
              required
              type="text"
              id="Name"
              placeholder='Name'
              className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'/>
            <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-[#ececec] px-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
              Name
            </span>
          </label>
        
          <label htmlFor='Value'
            className='p-1 relative rounded-md border border-gray-500 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
            <input {...register("value", {
              maxLength: {
                value: 10,
                message: "Max Length of 10 Numbers"
              }
            })}
              required
              type="number"
              min="0"
              id="Value"
              placeholder='Value'
              className='min-w-0 w-20 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'/>
            <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-[#ececec] px-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
              Value
            </span>
          </label>

          <div className='w-12 rounded-md px-1 border border-gray-500 shadow-sm flex justify-center items-center'>
            <input {...register("color", {})}
              type="color"
              id="Color"
              className='h-full'/>
          </div>

        </div>

        <div className='py-2 flex justify-end'>
            <button 
              type='submit'
              className='bg-[#385170] text-[#ececec] rounded px-6 py-2 text-sm font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring'>
              Add
            </button>
        </div>
        
      </form>
    </div>
  )
}

export default InputBox