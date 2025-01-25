import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'


const Left = () => {
  return (
    <div className='w-[30%] bg-slate-800'>
            <Search/>
            <Users/>
            <Logout/>
    </div>
  )
}

export default Left