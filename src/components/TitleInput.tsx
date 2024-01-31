import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import Context from '../context/Context'

type Props = {}

function TitleInput({}: Props) {

  const { title, setTitle } = useContext(Context) || { title: null, setTitle: () => {} };
  // VER SI HACEN FALTA TODSOS, SINO BORRAR
  const { reset, register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    const newTitle: string = data.title.charAt(0).toUpperCase() + data.title.slice(1)
    if(setTitle) setTitle(newTitle);
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-center xl:px-64 lg:px-20 md:px-52 px-6'>
          <label htmlFor='Title'
            className='p-1 w-full relative rounded-md border border-gray-500 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
            <input {...register("title", {
              maxLength: {
                value: 20,
                message: "Max Length of 20 Characters"
              }
            })}
              type="text"
              id="Title"
              placeholder='Title'
              className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0'/>
            <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-[#ececec] px-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
              Name
            </span>
            </label>
        </div>
        <div className='xl:px-64 lg:px-20 md:px-52 px-6 py-2 flex justify-end'>
          <button 
            type='submit'
            className='bg-[#385170] text-[#ececec] rounded px-6 py-2 text-sm font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring'>
            Change
          </button>
        </div>
      </form>
    </div>
  )
}

export default TitleInput