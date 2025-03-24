import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import{Link}from  'react-router-dom'

import axios from 'axios'

const Signup = () => {


    const Navigate = useNavigate()
    const [username , setUsername] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [phone,setPhone] = React.useState("")
    const [confirmPassword,setConfirmPassword] = React.useState("")
    const notify = (msg) => toast(msg);



    const mkSignup = async (e)=>{
        e.preventDefault(); 


        if(!password||!username||!email||!phone||!confirmPassword){
            
            notify("check all fields")
            return
        }

        if (confirmPassword !== password){

            notify('password is not confirmed')
            return
        }

        await axios.post('http://localhost:3000/signup',{
            username:username,
            password:password,
            email:email,
            phone:phone
        }).then((res)=>{
            console.log(res.data.msg)
            console.log(res.data.data)
            notify(res.data.msg)
        }).catch((err)=>{
            console.log(err)
        
        })


        notify("thanks for joining us")

        Navigate('/Login')

        
    }
    

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <ToastContainer />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form  method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="Username" className="block text-sm/6 font-medium text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e)=>{
                                    setUsername(e.target.value)
                                }}
                                id="Username"
                                name="Username"
                                type="Username"
                                required
                                autoComplete="Username"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                        phone
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e)=>{
                                    setPhone(e.target.value)
                                }}
                                id="phone"
                                name="phone"
                                type="phone"
                                required
                                autoComplete="phone"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div><div>
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        password
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="confirm password" className="block text-sm/6 font-medium text-gray-900">
                            confirm password
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                onChange={(e)=>{
                                setConfirmPassword(e.target.value)
                                }}
                                id="confirm password"
                                name="confirm password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={mkSignup}
                            
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Signup
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    have an Account?{' '}
                    <Link to="/Login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Login
                    </Link>
                </p>
            </div>
        </div>
        
    );
};

export default Signup;