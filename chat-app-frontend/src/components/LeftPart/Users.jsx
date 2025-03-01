import React from 'react'
import User from './User'
import '../../Global.css'
import useGetAllUsers from '../../context/useGetAllUsers'

const Users = () => {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers)
  return (
    <div className='border-b border-gray-300'>
      <p className='mx-5 mt-3 font-semibold text-xl'>Messages</p>

      <div className='hideScrollable h-[72vh] overflow-y-auto '>
        {
          allUsers.map((user, index) => (
            <User key={index} user={user} />
          ))
        }
      </div>
    </div>
  )
}

export default Users