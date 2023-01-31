import {React, useState }from 'react'
import { FaCheck, FaTimes} from 'react-icons/fa'


const Registration = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    
    // Save password & confirmPassword to use them later.
    const [password, setPassword ]= useState('');
    const [confirmPassword, setConfirmPassword ]= useState('');
    
    return (
        <div className="container max-w-full mx-auto md:py-10 px-6">
            <div className="max-w-sm mx-auto px-6">
                <div className="relative flex flex-wrap">
                    <div className="w-full relative">
                        <div className="md:mt-6">
                            <div className="text-center font-semibold text-black text-4xl">
                                Sign Up
                            </div>
                            <div className="text-center font-base text-black">
                                It's quick and easy.
                            </div>
                            <form className="mt-8">
                                <div className="mx-auto max-w-lg ">
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-gray-600">Username</span>
                                        <input placeholder="" type="text"
                                            className="text-md block px-3 py-2 rounded-lg w-full
                                                    bg-white border-2 border-gray-300 placeholder-gray-600 
                                                    shadow-md  focus:bg-white 
                                                    focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-gray-600">Email</span>
                                        <input placeholder="" type="email" className="text-md block px-3 py-2 rounded-lg w-full
                                                    bg-white border-2 border-gray-300 
                                                    placeholder-gray-600 shadow-md 
                                                    focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-gray-600">Password</span>
                                        <input placeholder="" type="password" name='password' onChange={(event)=>{setPassword(event.target.value)}}
                                            className="text-md block px-3 py-2 
                                                rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600
                                                shadow-md  focus:bg-white focus:border-gray-600 focus:outline-none"
                                        />
                                    </div>
                                    <div className="py-1">
                                        <span className="px-1 text-sm text-gray-600">Password Confirm</span>
                                        <input placeholder="" type="password" x-model="password_confirm" onChange={(event)=>{setConfirmPassword(event.target.value)}}
                                            className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600
                                            shadow-md  focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                    </div>
                                    <div className="flex justify-start mt-3 ml-4 p-1">
                                        <ul>
                                            <li className="flex items-center py-1">
                                                <div className={classNames(password === confirmPassword && password.length > 0 ? (
                                                    'bg-green-200 text-green-700'):('bg-red-200 text-red-700'),
                                                    'rounded-full p-1 fill-current' )}>
                                                    
                                                    {password === confirmPassword && password.length > 0 ?(
                                                        <FaCheck className='font-medium text-sm' />
                                                    ):(
                                                        <FaTimes className='font-medium text-sm' />
                                                    )}
                                                </div>
                                                <span className={classNames(password === confirmPassword && password.length > 0 ? (
                                                        'text-green-700'
                                                    ):(
                                                        'text-red-700'
                                                    ),'font-medium text-sm ml-3')}>
                                                    {password === confirmPassword && password.length > 0 ? (
                                                        'Passwords match'
                                                    ):(
                                                        'Passwords do not match'
                                                    )}
                                                </span>
                                            </li>
                                            <li className="flex items-center py-1">
                                                <div className={classNames(password.length > 7 ? (
                                                    'bg-green-200 text-green-700'
                                                    ):(
                                                        'bg-red-200 text-red-700'
                                                    ), 'rounded-full p-1 fill-current')}>
                                                    {password.length > 7 ?(
                                                        <FaCheck className='font-medium text-sm' />
                                                    ):(
                                                        <FaTimes className='font-medium text-sm' />
                                                    )}
                                                </div>
                                                <p className={classNames(password.length > 7 ?  'text-green-700': 'text-red-700','font-medium text-sm ml-3')}>
                                                    {password.length > 7 ? 'The minimum length is reached' : 'At least 8 characters required'}
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex justify-start">
                                        <label className=" text-gray-500 font-bold my-4 flex items-center">
                                            <input className="leading-loose top-0" type="checkbox"/>
                                                <span className="ml-2 text-sm py-2 text-gray-600 text-left">
                                                    Accept the
                                                    <a href="/klk"
                                                        className="font-semibold text-blue-500 border-b-2 px-1 border-gray-200 hover:border-gray-500">
                                                    <span>Terms and Conditions of the site</span>
                                                    </a>and
                                                    <a href="/klk"
                                                        className="font-semibold text-blue-500 border-b-2 px-1 border-gray-200 hover:border-gray-500">
                                                        the information data policy.</a>
                                                </span>
                                        </label>
                                    </div>
                                    <button className="mt-1 text-lg font-semibold
                                        bg-gray-800 w-full text-white rounded-lg
                                        px-3 py-2 block shadow-xl hover:text-white hover:bg-black">
                                        Register
                                    </button>
                                </div>
                            </form>

                            <div className="text-sm font-semibold py-6 flex justify-center hover:text-indigo-300">
                                <a href="/klk" className="text-black font-normal border-b-2 border-gray-900 ">
                                    You're already member?
                                    <span className="text-black px-1 font-semibold ">
                                        Login
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration