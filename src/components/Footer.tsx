import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='xl:px-24 px-4 bg-[#142d4c]'>
      <div className='flex justify-between text-[#ececec] py-5'>
        <h2 className='xl:text-2xl text-bold'>EasyGraph</h2>
        <p>Made by Facundo Reartes</p>
      </div>
    </div>
  )
}

export default Footer