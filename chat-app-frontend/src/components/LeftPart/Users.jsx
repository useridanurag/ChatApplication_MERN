import React from 'react'
import User from './User'
import '../../Global.css'

const Users = () => {
  return (
    <div className='border-b border-gray-300'>
        <p className='mx-5 mt-3 font-semibold text-xl'>Messages</p>
        
        <div className='hideScrollable h-[75.5vh] overflow-y-auto '>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        </div>
    </div>
  )
}

export default Users