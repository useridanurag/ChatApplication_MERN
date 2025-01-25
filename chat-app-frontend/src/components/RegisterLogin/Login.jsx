import React from 'react'

const Login = () => {
  return (
    <div className='w-[30%]  border-white border rounded-md bg-slate-700'>
      <p className='text-2xl text-green-400 font-semibold text-center mb-2'>Chat App</p>
      <hr />
      <p className='text-xl text-white font-semibold my-2 ml-4'>Login</p>
      <form action="">
        <div className='flex flex-col p-4 gap-2 text-black'>

          <input className='focus:outline-none rounded text-lg px-2 border-2 hover:border-green-500' type="email" placeholder='Email' />

          <input className='focus:outline-none rounded text-lg px-2 border-2 hover:border-green-500' type="password" placeholder='Password' />



          <div className='flex justify-between text-gray-300'><span>New User ? <a href="">Register</a></span> <button className='bg-green-500 rounded text-lg px-1 text-white'>Login</button></div>
        </div>
      </form>
    </div>
  )
}

export default Login