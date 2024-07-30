import { FC } from 'react'

const Footer: FC = () => {
  return (
    <div className='xl:px-24 px-4 bg-[#142d4c]'>
      <div className='flex justify-between text-[#ececec] py-3'>
        <h2 className='xl:text-2xl text-bold'>Easy Charts</h2>
        <p className='flex items-center'>Made by Facundo Reartes</p>
      </div>
    </div>
  )
}

export default Footer