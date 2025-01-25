import React from 'react'
import Register from './Register'
import Login from './Login'
const RegisterLogin = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center  bg-slate-700'>
        <Register/>
        <Login/>
        </div>
    )
}
export default RegisterLogin