import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import authImage from '../../assets/authImage.jfif'
// max-w-md
const SignIn = () => {
    return (
        <div className='flex lg:flex-row flex-col'>
            <div className='lg:w-[50%] lg:h-full h-[500px] lg:p-0 p-10 px-20 rounded-lg'>
                <img className='w-full h-full rounded-lg' src={authImage} alt="" />
            </div>
            <div className='lg:w-[50%] w-[90%] mx-auto p-10'>
                <div className="flex flex-col p-6 border-2 border-solid border-green-900 rounded-lg sm:p-10 ">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold text-green-900">Sign in</h1>
                        <p className="text-sm text-green-400 font-bold">Sign in to access your account</p>
                    </div>
                    <form className="space-y-12 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-start font-bold text-green-900">Email address</label>
                                <input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md border-green-900 border-solid border-5 text-green-900 font-bold" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-start font-bold text-green-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-green-900 border-5 text-green-900 font-bold border-solid" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className='flex items-center'>
                                <p className='text-xl text-green-900 font-bold'>Forgot Password?</p>
                                <button className='btn btn-ghost mx-5 text-blue-900 font-bold'>Reset</button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary bg-green-500 w-full">Sign in</button>
                            </div>
                            <p className="text-center text-green-900 text-xl font-bold">Don't have an account yet?
                                <Link to={'/signup'} className="hover:underline text-blue-900">Sign up</Link>.
                            </p>
                        </div>
                    </form>
                </div>
                <div className='flex items-center justify-evenly my-10'>
                    <hr className='w-[40%] border-10 border-green-900 ' />
                    <p className='text-green-900 font-bold text-xl'>Or</p>
                    <hr className='w-[40%] border-10 border-green-900 ' />
                </div>
                <div className='flex items-center justify-evenly'>
                    <FaGoogle className='text-5xl font-bold text-green-900'></FaGoogle>
                    <FaFacebook className='text-5xl font-bold text-green-900'></FaFacebook>
                    <FaGithub className='text-5xl font-bold text-green-900'></FaGithub>
                </div>
            </div>

        </div>
    );
};

export default SignIn;