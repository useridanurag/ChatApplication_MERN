import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Import eye icons
import axios from "axios";
import { useAuth } from '../../context/AuthProvider';
import { Link } from "react-router";

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);  // Toggle password visibility
  const [authUser, setAuthUser] = useAuth();
  // Submit Logic
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          localStorage.setItem("ChatApp", JSON.stringify(response.data));
          setAuthUser(response.data);
          console.log(response.data);
          alert(response.data.message);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          alert("Error : " + error.response.data.error);
        }
      });
  };

  return (
    <div className='w-full h-[100vh] flex justify-center items-center  bg-slate-700'>
      <div className='w-[30%] border-white border rounded-md bg-slate-900'>
        <p className='text-2xl text-green-400 font-semibold text-center mb-2'>Chat App</p>
        <hr />
        <p className='text-xl text-white font-semibold my-2 ml-4'>Login</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col p-4 gap-2 text-black'>

            {/* Email Field */}
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Please enter a valid email address"
                }
              })}
              className='focus:outline-none rounded text-lg px-2 border-2 hover:border-green-500'
              type="email"
              placeholder='Email'
            />
            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

            {/* Password Field */}
            <div className="relative flex items-center">
              <input
                {...register('password', {
                  required: "Password is required",
                  minLength: { value: 8, message: "Password must be at least 8 characters" },
                })}
                className='focus:outline-none rounded text-lg px-2 border-2 hover:border-green-500 w-full'
                type={passwordVisible ? "text" : "password"}
                placeholder='Password'
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-3 flex items-center justify-center"
              >
                {passwordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />} {/* Eye icon */}
              </button>
            </div>
            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

            <div className='flex justify-between text-gray-300'>
              <span>New User ? <Link to="/register" className='text-blue-600'>Register</Link></span>
              <button
                type='submit'
                value={isSubmitting ? "Submitting" : "Submit"}
                disabled={isSubmitting}
                className='bg-green-500 rounded text-lg px-1 text-white'
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
