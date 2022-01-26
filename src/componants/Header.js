import React from 'react';

function Header() {
    return <div><div className="flex bg-white justify-between border-b-2 shadow-md p-4 z-10">
        <div className="flex flex-col">
            <span className="font-bold text-xl">Balance</span>
            <span className="font-bold text-xl">₹<span id="userBal">0</span></span>
        </div>
        <div className="flex justify-center items-center" id="rulebtn">
            <span><a href="add_money" className="bg-yellow-400 text-white rounded-full shadow-lg px-3 py-2">Recharge</a></span>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                </path>
            </svg>
            <span className="ml-1 cursor-pointer">Rule</span>
        </div>

    </div></div>;
}

export default Header;
