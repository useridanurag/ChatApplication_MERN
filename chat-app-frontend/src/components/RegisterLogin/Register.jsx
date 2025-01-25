import React from 'react'
import { useForm } from "react-hook-form";


const Register = () => {
  const { register, handleSubmit, watch, formState: { errors,isSubmitting } } = useForm();
  function onSubmit(data) {
    console.log("submiting the form :", data)
  }
  return (
    <div className='w-[30%] border-white border rounded-md bg-slate-700'>
      <p className='text-2xl text-green-400 font-semibold text-center mb-2'>Chat App</p>
      <hr />
      <p className='text-xl text-white font-semibold my-2 ml-4'>Register</p>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className='flex flex-col p-4 gap-2 text-black'>

          <input {...register('fullName',
            {
              required: true,
              minLength: { value: 3, message: "Min length at least 3" },
              maxLength: { value: 20, message: "maximum length upto 20" },
            })}
            type="text"
            placeholder='Full Name'
            className='focus:outline-none rounded text-lg px-2 border-2 hover:border-green-500'
          />
          {errors.fullName && <p className='text-red-600'>{errors.fullName.message}</p>}


          <input {...register('email')} className='focus:outline-none rounded text-lg px-2 border-2 hover:border-green-500' type="email" placeholder='Email' />

          <input {...register('password')} className='focus:outline-none rounded text-lg px-2 border-2 hover:border-green-500' type="password" placeholder='Password' />

          <input {...register('confirmPassword')} className='focus:outline-none rounded text-lg px-2 border-2 hover:border-green-500' type="password" placeholder='Confirm Password' />

          <div className='flex justify-between text-gray-300'><span>Have an account ? <a href="">Login</a></span> <button type='submit'
           value={isSubmitting?"submiting":"Submit"}
           desable={isSubmitting}
            className='bg-green-500 rounded text-lg px-1 text-white'>Register</button></div>
        </div>
      </form>
    </div>
  )
}

export default Register