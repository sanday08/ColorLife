import React from 'react';
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    return <div class="max-w-md w-full bg-gray-100 h-screen relative mx-auto p-8">
        <div class="flex flex-col items-center">
            <img src="<?php echo base_url(); ?>images/web/logo.png" class="w-64" />
            <h4 class="font-black text-6xl mt-2">Register</h4>
        </div>
        <div class="flex relative items-center mt-10">
            <span class="absolute ml-4 font-bold"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg></span>
            <input type="text" name="username" class="w-full p-4 pl-16" placeholder="Enter User Name" />
        </div>
        <div class="flex relative items-center mt-4">
            <span class="absolute ml-4 font-bold">+91</span>
            <input class="w-full p-4 pl-16" placeholder="Input Mobile Phone Number" />
        </div>
        <div class="flex relative items-center mt-4">
            <span class="absolute ml-4 font-bold"><svg class="w-6 h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                </path>
            </svg></span>
            <input class="w-full p-4 pl-16" placeholder="Password" />
        </div>
        <div class="flex relative items-center mt-4">
            <span class="absolute ml-4 font-bold"><svg class="w-6 h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                </path>
            </svg></span>
            <input class="w-full p-4 pl-16" placeholder="Confirm Password" />
        </div>
        <div class="flex relative items-center mt-4">
            <span class="absolute ml-4 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg></span>
            <input class="w-full p-4 pl-16" placeholder="Reffral Code" />
        </div>
        <button class="rounded shadow-2xl mt-4 bg-gray-500 w-full text-white py-4 font-bold">Register</button>
        <div class="flex justify-center font-semibold mt-4"><span>Registered account?</span>
            <Link class="ml-2 text-blue-500" to='/login'>Login</Link></div>
        <div class="flex justify-center absolute -ml-8 w-full bottom-14 font-semibold"><a href="">Feedback</a></div>
    </div>
};

export default RegisterScreen;
