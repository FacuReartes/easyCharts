import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Context from '../context/Context'

type Props = {}

function InputBox({}: Props) {

  const { element, setElement } = useContext(Context) || { element: null, setElement: () => {} };
  // VER SI HACEN FALTA TODSOS, SINO BORRAR
  const { reset, register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    
    const newElement = {
      id: element.length + 1,
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      value: parseInt(data.value, 10),
      color: data.color
    }
    
    if(setElement) setElement([...element, newElement]);
    reset();
  }

  // DEFAULT VALUES??
  return (
    <div className='px-64'>
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
              type="number"
              id="Value"
              placeholder='Value'
              className='min-w-0 w-20 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'/>
            <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-[#ececec] px-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
              Number
            </span>
          </label>
          <div className='w-12 rounded-md px-1 border border-gray-500 shadow-sm flex justify-center items-center'>
            <input {...register("color", {
            
            })}
              type="color"
              id="Color"
              className='h-full'/>
          </div>
        </div>
        <div className='py-2 flex justify-end'>
            <button 
              type='submit'
              className='text-[#142d4c] border-[#142d4c] hover:bg-[#385170] hover:text-[#ececec] px-4 py-1 rounded-md border-2 delay-75 transition-all'>
              Add
            </button>
        </div>
      </form>
    </div>
  )
}

export default InputBox