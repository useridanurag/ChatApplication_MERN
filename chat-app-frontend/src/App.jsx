import React from 'react'
import Left from './components/LeftPart/Left'
import Right from './components/RightPart/Right'
import RegisterLogin from './components/RegisterLogin/RegisterLogin'


const App = () => {
  return <>
    <div className='flex h-screen text-gray-300'>
      {/* <Left/>
      <Right/> */}
      <RegisterLogin/>
    </div>
  </>
}

export default App