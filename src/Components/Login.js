import React, { useRef, useState } from 'react';
import Header from './Header';
import { ValidationCheck } from '../Utils/ValidationCheck';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonOnClick = () => {
        const message = ValidationCheck(email.current.value, password.current.value);
        setErrorMessage(message);
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null);  
    };

    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img
                    className=''
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"
                    alt="background"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='p-12 absolute bg-black w-3/12 m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-2xl py-4 '>{!isSignInForm ? 'SIGN-UP' : 'SIGN-IN'}</h1>
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
                <input
                    ref={email}
                    type='text'
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-600'
                />
                <input
                    ref={password}
                    type='password'
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-600'
                />
                <p className='text-red-600 text-xl'>{errorMessage}</p>
                <button
                    type='button'
                    className='p-4 my-6 bg-red-700 w-full rounded-lg'
                    onClick={handleButtonOnClick}
                >
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p className='p-4 my-2 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already a User? Sign In'}
                </p>
            </form>
        </div>
    );
};

export default Login;
