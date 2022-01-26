import React from 'react';
import { Link } from 'react-router-dom'
import RegisterScreen from './RegisterScreen';

const LoginScreen = () => {
    return <>
        <div class="max-w-md w-full bg-gray-100 h-screen relative mx-auto p-8">
            <div class="flex flex-col items-center">
                <img src="" class="w-64" />
                <h4 class="font-black text-6xl mt-2">Login</h4>
            </div>
            <form action="" method="post">
                <div class="flex relative items-center mt-8">
                    <span class="absolute ml-4 font-bold">+91</span>
                    <input type="text" name="wmno" class="w-full p-4 pl-16" placeholder="Input Mobile Phone Number" />
                </div>
                <div class="flex relative items-center mt-4">
                    <span class="absolute ml-4 font-bold"><svg class="w-6 h-6" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                        </path>
                    </svg></span>
                    <input type="text" name="password" class="w-full p-4 pl-16" placeholder="Password" />
                </div>
                <button type="submit"
                    class="rounded shadow-2xl mt-4 bg-gray-500 w-full text-white py-4 font-bold">Login</button>
            </form>
            <div class="flex justify-center font-semibold mt-4"><span>Don't have a account?</span>
                <Link class="ml-2 text-blue-500" to="/register">Register</Link></div>
            <div class="flex justify-center absolute -ml-8 w-full bottom-14 font-semibold "><a href="">Feedback</a></div>
        </div>
    </>
        ;

};

export default LoginScreen;
