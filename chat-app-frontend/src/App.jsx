import React from 'react'
import Left from './components/LeftPart/Left'
import Right from './components/RightPart/Right'
import { useAuth } from './context/AuthProvider'
import { Routes, Route, Navigate } from "react-router";
import Register from './components/RegisterLogin/Register'
import Login from './components/RegisterLogin/Login'



const App = () => {
  const [authUser, setAuthUser] = useAuth()
  // console.log(authUser);
  return <>
    <div className='flex h-screen text-gray-300'>

      <Routes>
        <Route path='/' element={
          authUser ? (<>
            <Left />
            <Right />
          </>) : (<Navigate  to={"/login"}/>)
        } />
        <Route path='/login' element={authUser? (<Navigate to={"/"}/>):(<Login/>)}/>
        <Route path='/register' element={authUser? (<Navigate to={"/"}/>):(<Register/>)}/>
      </Routes>
    </div>

  </>
}

export default App