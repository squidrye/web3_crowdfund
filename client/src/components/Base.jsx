import React from 'react'
import { MyNavbar } from '.'
import { Card } from '@material-tailwind/react'

const Base = ({ children }) => {
  return (
    <div className='relative sm: -8 p-4 bg-[#C3CDE6] min-h-screen flex flex-col '>
      <MyNavbar />
      {children}
    </div>
  )
}

export default Base