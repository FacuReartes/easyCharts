import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div className='border-b border-[#142d4c] py-3 xl:py-5 px-4 xl:px-24'>
        <h3 className='text-2xl font-bold'>EasyGraph</h3>
    </div>
  )
}

export default Header