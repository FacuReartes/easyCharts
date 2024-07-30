import { FC, useContext } from 'react'
import { useForm } from 'react-hook-form';
import { ElementContext, ContextInterface } from '../context/Context'

interface TitleInput {
  title: string
}

// Handles the input of the Chart title
const TitleInput: FC = () => {

  // Gets the state setter for the title
  const { setTitle } = useContext(ElementContext) as ContextInterface;

  const { reset, register, handleSubmit } = useForm<TitleInput>();

  // On submit, makes the first letter uppercase and sets the new title
  const onSubmit = (data: TitleInput) => {
    const newTitle: string = data.title.charAt(0).toUpperCase() + data.title.slice(1)
    setTitle(newTitle);
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
              Title
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