import React from 'react';
import MenuFooter from '../../componants/MenuFooter';
import Header from '../../componants/Header'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return <div className="bg-white-100 overflow-y-scroll m-auto relative h-screen">
        <Header />
        <div className="bg-white">
            <nav className="tabs flex justify-between sm:flex-row">
                <Link to="/panel1"><button id="panel-1" data-target="panel-1" className="tab active text-gray-600 font-bold py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">Metaly</button></Link>
                <Link to="/panel2"><button id="panel-2" data-target="panel-2" className="tab text-gray-600 font-bold py-4 px-6 block hover:text-blue-500 focus:outline-none">Parity</button></Link>
                <Link to="/panel3"><button id="panel-3" data-target="panel-3" className="tab text-gray-600 font-bold py-4 px-6 block hover:text-blue-500 focus:outline-none">Spare</button></Link>
                <Link to="/panel4"><button id="panel-4" data-target="panel-4" className="tab text-gray-600 font-bold py-4 px-6 block hover:text-blue-500 focus:outline-none">Bcone</button></Link>
            </nav>
        </div>
        <hr className="bg-gray-400" />
        <div className="flex justify-between m-4">
            <div className="flex flex-col">
                <span className="text-gray-400">Period</span>
                <span className="text-2xl font-bold" id="blursPeriod" ></span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-gray-400">Count Down</span>
                <div className="flex text-2xl font-bold mt-1 items-center">
                    <span className="bg-blue-100 px-2 pb-1 border-b-4 rounded border-blue-300" id="min1">0</span>
                    <span className="bg-blue-100 px-2 pb-1 border-b-4 ml-1 rounded border-blue-300" id="min2">0</span>
                    <span className="text-3xl -mt-2 mx-1">:</span>
                    <span className="bg-blue-100 px-2 pb-1 border-b-4 rounded border-blue-300" id="sec1">0</span>
                    <span className="bg-blue-100 px-2 pb-1 border-b-4 ml-1 rounded border-blue-300" id="sec2">0</span>
                </div>
            </div>
        </div>
        <div className="flex m-4">
            <div className="w-full flex flex-col items-center mr-1">
                <button className="font-bold rounded-xl w-full bg-green-500 shadow-md text-white py-4 text-xl bet"
                    id="Green" disabled>Join
                    Green</button>
                <span className="text-sm text-gray-400">1:2</span>
            </div>
            <div className="w-full flex flex-col items-center mx-1">
                <button className="font-bold rounded-xl w-full bg-purple-600 shadow-md text-white py-4 text-xl bet"
                    id="Violet" disabled>Join Violet</button>
                <span className="text-sm text-gray-400">1:4.5</span>
            </div>
            <div className="w-full flex flex-col items-center ml-1">
                <button className="font-bold rounded-xl w-full bg-red-500 shadow-md text-white py-4 text-xl bet"
                    id="Red" disabled>Join Red</button>
                <span className="text-sm text-gray-400">1:2</span>
            </div>
        </div>
        <div className="grid text-center grid-cols-5 gap-2 mx-4">
            <button className="hover:border-gray-400 rounded-xl border-2 py-3 bg-blue-100 text-xl font-semibold border-gray-300 bet" disabled id="0">0</button>
            <button className="hover:border-gray-400 rounded-xl border-2 py-3 bg-blue-100 text-xl font-semibold border-gray-300 bet" disabled id="1">1</button>
            <button className="hover:border-gray-400 rounded-xl border-2 py-3 bg-blue-100 text-xl font-semibold border-gray-300 bet" disabled id="2">2</button>
            <button className="hover:border-gray-400 rounded-xl border-2 py-3 bg-blue-100 text-xl font-semibold border-gray-300 bet" disabled id="3">3</button>
            <button className="hover:border-gray-400 rounded-xl border-2 py-3 bg-blue-100 text-xl font-semibold border-gray-300 bet" disabled id="4">4</button>
            <button className="hover:border-gray-400 rounded-xl border-2 py-3 bg-blue-100 text-xl font-semibold border-gray-300 bet" disabled id="5">5</button>
            <button className="hover:border-gray-400 rounded-xl border-2 py-3 bg-blue-100 text-xl font-semibold border-gray-300 bet" disabled id="6">6</button>
            <button className="hover:border-gray-400 rounded-xl border-2 py-3 bg-blue-100 text-xl font-semibold border-gray-300 bet" disabled id="7">7</button>
            <button className="hover:border-gray-400 rounded-xl border-2 py-3 bg-blue-100 text-xl font-semibold border-gray-300 bet" disabled id="8">8</button>
            <button className="hover:border-gray-400 rounded-xl border-2 py-3 bg-blue-100 text-xl font-semibold border-gray-300 bet" disabled id="9">9</button>
        </div>
        <div className=" text-center text-sm text-gray-400">1:9</div>

        {/* data */}
        <div id="panels">
            <div className="panel-1 tab-content active">
                <div style={{ borderBottom: `2px solid #eaeaea` }}>
                    <div className="flex justify-between p-4">
                        <div className=""><span className="font-bold text-xl">Metaly Record</span></div>
                        <a id="" href="winhistory?game=Metaly">
                            <div className="flex">
                                <span className="font-bold">more</span>
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <hr className="bg-gray-400" />
                </div>
                <div style={{ borderBottom: `2px solid #eaeaea` }}>
                    <div className="flex justify-between p-4">
                        <div className=""><span className="font-bold text-xl">My Bcone Record</span></div>
                        <a id="more" href="betHistory?game=Bcone&user_id=<?=$this->session->userdata('id');?>">
                            <div className="flex">
                                <span className="font-bold">more</span>
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <MenuFooter />
    </div>
};

export default Dashboard;