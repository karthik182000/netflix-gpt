import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm] =useState(true);

    const toggleSigInForm = ()=>{
       setIsSignInForm(!isSignInForm)
    }
  return (
    <div className=''>
        <Header/>
        <div className='absolute '>
            <img 
            className=''
            src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg" 
            alt="logo"/>
        </div>
        <form className='p-12 absolute bg-black w-3/12 m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-2xl py-4 '>{!isSignInForm? 'SIGN-UP': 'SIGN-IN'} </h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 '  />
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 '  />
            <button  className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In </button>
            <p className='p-4 my-2 cursor-pointer' onClick={toggleSigInForm}>{isSignInForm ? ' New to Netflix?? SignUp Now':'Already an User?? SignIn' }</p>
        </form>
    </div>
  )
}

export default Login