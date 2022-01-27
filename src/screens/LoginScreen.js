import React from 'react';
import { Link } from 'react-router-dom'
import RegisterScreen from './RegisterScreen';
import axios from 'axios';

const LoginScreen = () => {
    const [userName, setuserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [post, setPost] = React.useState(null);

    async function login() {
        let versionCode = '1.0';
        let credentials = { userName, password, versionCode };
        console.log(credentials);
        axios.post('http://15.207.99.120:5000/api/auth/login', credentials).then(data => {
            console.log(data.data)
            localStorage.setItem("user", JSON.stringify(data.data))
            axios.post('http://15.207.99.120:5000/api/auth/login', credentials).then(data => {
                console.log(data.data)
                localStorage.setItem("user", JSON.stringify(data.data))
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    return <>
        <div className="relative w-full h-screen max-w-md p-8 mx-auto bg-gray-100">
            <div className="flex flex-col items-center">
                <h4 className="mt-2 text-6xl font-black">Login</h4>
            </div>
            {/* <form> */}
            <div className="relative flex items-center mt-8">
                <span className="absolute ml-4 font-bold">+91</span>
                <input type="text" name="wmno" className="w-full p-4 pl-16" placeholder="Input Mobile Phone Number" onChange={(e) => setuserName(e.target.value)} />
            </div>
            <div className="relative flex items-center mt-4">
                <span className="absolute ml-4 font-bold"><svg className="w-6 h-6" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                    </path>
                </svg></span>
                <input type="text" name="password" className="w-full p-4 pl-16" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="w-full py-4 mt-4 font-bold text-white bg-gray-500 rounded shadow-2xl" onClick={login}> Login</button>
            {/* </form> */}
            <div className="flex justify-center mt-4 font-semibold"><span>Don't have a account?</span>
                <Link className="ml-2 text-blue-500" to="/register">Register</Link></div>
            <div className="absolute flex justify-center w-full -ml-8 font-semibold bottom-14 "><a href="">Feedback</a></div>
        </div>
    </>
        ;
};

export default LoginScreen;
