import React from 'react'
import { MyNavbar } from '.'

const Base = ({children}) => {
  return (
    <div>
        <MyNavbar />
        {children}
        
    </div>
  )
}

export default Base