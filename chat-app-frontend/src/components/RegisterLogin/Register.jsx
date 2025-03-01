import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from "axios";
import { useAuth } from '../../context/AuthProvider';
import { Link } from "react-router";

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);  // Toggle password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);  // Toggle confirm password visibility
  const [authUser, setAuthUser] = useAuth();

  // Watch password fields to check if they match
  const password = watch("password");

  // Submit Logic
  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    await axios
      .post("/api/user/register", userInfo)
      .then((response) => {
        if (response.data) {
          localStorage.setItem("ChatApp", JSON.stringify(response.data));
          setAuthUser(response.data); // storing user data in to context
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
        <p className='text-xl text-white font-semibold my-2 ml-4'>Register</p>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className='flex flex-col p-4 gap-2 text-black'>

            {/* Full Name Field */}
            <input
              {...register('fullName', {
                required: "Full Name is required",
                minLength: { value: 3, message: "Full Name must be at least 3 characters" },
                maxLength: { value: 20, message: "Full Name must not exceed 20 characters" },
              })}
              type="text"
              placeholder='Full Name'
              className='focus:outline-none rounded text-lg px-2 border-2 hover:border-green-500'
            />
            {errors.fullName && <p className='text-red-600'>{errors.fullName.message}</p>}

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
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                  }
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
                {passwordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

            {/* Confirm Password Field */}
            <div className="relative flex items-center">
              <input
                {...register('confirmPassword', {
                  required: "Please confirm your password",
                  validate: value => value === password || "Passwords do not match"
                })}
                className='focus:outline-none rounded text-lg px-2 border-2 hover:border-green-500 w-full'
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder='Confirm Password'
              />
              <button
                type="button"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                className="absolute right-3 flex items-center justify-center"
              >
                {confirmPasswordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword.message}</p>}

            <div className='flex justify-between text-gray-300'>
              <span>Have an account ? <Link to="/login" className='text-blue-600'>Login</Link></span>
              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-green-500 rounded text-lg px-1 text-white'
              >
                {isSubmitting ? "Submitting" : "Register"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
