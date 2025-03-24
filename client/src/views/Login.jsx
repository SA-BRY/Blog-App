import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const Navigate = useNavigate()
    const [username , setUsername] = React.useState("")
    const [password,setPassword] = React.useState("")



    const notify = (msg) => toast(msg);



    const mkLogin = async(e)=>{
        e.preventDefault(); 
        if(!password,!username){

            notify("Enter Username & Password")
            return
        }

        await axios.post('http://localhost:3000/login',{


            username:username,
            password:password



        }).then((res)=>{

            if(res.data.state===1){
            
            Navigate('/Main')
            console.log(res.data.msg)
            console.log(res.data.data)
            window.localStorage.setItem('user',JSON.stringify(res.data.data))
            console.log(window.localStorage.getItem('user'))
            return
            }

            notify(res.data.msg)

        }).catch((err)=>{
            console.log(err)
        })





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
                <form method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e)=>{
                                    setUsername(e.target.value)
                                }}
                                id="username"
                                name="username"
                                type="username"
                                required
                                autoComplete="username"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a onClick={(e) => e.preventDefault()} className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                onChange={(e)=>{
                                setPassword(e.target.value)
                                }}
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={mkLogin}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member?{' '}
                    <Link to="/Signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Signup
                    </Link>
                </p>
            </div>
        </div>
        
    );
};

export default Login;