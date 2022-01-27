import React from 'react';
import MenuFooter from '../componants/MenuFooter';
import Header from '../componants/Header';



const Dashboard = (id) => {
    const [showModal, setShowModal] = React.useState('');
    const bet = (e) => {
        console.log(e);
        setShowModal(e);
    }

    return <>
        <div className="relative h-screen m-auto overflow-y-scroll bg-white-100">
            <Header />
            <hr className="bg-gray-400" />
            <div className="flex justify-between m-4">
                <div className="flex flex-col">
                    <span className="text-gray-400">Period</span>
                    <span className="text-2xl font-bold" id="blursPeriod" ></span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-gray-400">Count Down</span>
                    <div className="flex items-center mt-1 text-2xl font-bold">
                        <span className="px-2 pb-1 bg-blue-100 border-b-4 border-blue-300 rounded" id="min1">0</span>
                        <span className="px-2 pb-1 ml-1 bg-blue-100 border-b-4 border-blue-300 rounded" id="min2">0</span>
                        <span className="mx-1 -mt-2 text-3xl">:</span>
                        <span className="px-2 pb-1 bg-blue-100 border-b-4 border-blue-300 rounded" id="sec1">0</span>
                        <span className="px-2 pb-1 ml-1 bg-blue-100 border-b-4 border-blue-300 rounded" id="sec2">0</span>
                    </div>
                </div>
            </div>
            <div className="flex m-4">
                <div className="flex flex-col items-center w-full mr-1">
                    <button className="w-full py-4 text-xl font-bold text-white bg-green-500 shadow-md rounded-xl bet"
                        id="Green" onClick={() => bet('Green')}>Join
                        Green</button>
                    <span className="text-sm text-gray-400">1:2</span>
                </div>
                <div className="flex flex-col items-center w-full mx-1">
                    <button className="w-full py-4 text-xl font-bold text-white bg-purple-600 shadow-md rounded-xl bet"
                        id="Violet" onClick={() => bet('Violet')}>Join Violet</button>
                    <span className="text-sm text-gray-400">1:4.5</span>
                </div>
                <div className="flex flex-col items-center w-full ml-1">
                    <button className="w-full py-4 text-xl font-bold text-white bg-red-500 shadow-md rounded-xl bet"
                        id="Red" onClick={() => bet('Red')}>Join Red</button>
                    <span className="text-sm text-gray-400">1:2</span>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-2 mx-4 text-center">
                <button className="py-3 text-xl font-semibold bg-blue-100 border-2 border-gray-300 hover:border-gray-400 rounded-xl bet" onClick={() => bet('0')} id="0">0</button>
                <button className="py-3 text-xl font-semibold bg-blue-100 border-2 border-gray-300 hover:border-gray-400 rounded-xl bet" onClick={() => bet('1')} id="1">1</button>
                <button className="py-3 text-xl font-semibold bg-blue-100 border-2 border-gray-300 hover:border-gray-400 rounded-xl bet" onClick={() => bet('2')} id="2">2</button>
                <button className="py-3 text-xl font-semibold bg-blue-100 border-2 border-gray-300 hover:border-gray-400 rounded-xl bet" onClick={() => bet('3')} id="3">3</button>
                <button className="py-3 text-xl font-semibold bg-blue-100 border-2 border-gray-300 hover:border-gray-400 rounded-xl bet" onClick={() => bet('4')} id="4">4</button>
                <button className="py-3 text-xl font-semibold bg-blue-100 border-2 border-gray-300 hover:border-gray-400 rounded-xl bet" onClick={() => bet('5')} id="5">5</button>
                <button className="py-3 text-xl font-semibold bg-blue-100 border-2 border-gray-300 hover:border-gray-400 rounded-xl bet" onClick={() => bet('6')} id="6">6</button>
                <button className="py-3 text-xl font-semibold bg-blue-100 border-2 border-gray-300 hover:border-gray-400 rounded-xl bet" onClick={() => bet('7')} id="7">7</button>
                <button className="py-3 text-xl font-semibold bg-blue-100 border-2 border-gray-300 hover:border-gray-400 rounded-xl bet" onClick={() => bet('8')} id="8">8</button>
                <button className="py-3 text-xl font-semibold bg-blue-100 border-2 border-gray-300 hover:border-gray-400 rounded-xl bet" onClick={() => bet('9')} id="9">9</button>
            </div>
            <div className="text-sm text-center text-gray-400 ">1:9</div>

            {/* data */}
            <div id="panels">
                <div className="panel-1 tab-content active">
                    <div style={{ borderBottom: `2px solid #eaeaea` }}>
                        <div className="flex justify-between p-4">
                            <div className=""><span className="text-xl font-bold">Period Record</span></div>
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
                            <div className=""><span className="text-xl font-bold">My Period Record</span></div>
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

            {/* model */}
            {showModal ? (
                <>
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
                    >
                        <div className="relative w-full p-4 mx-auto my-6 bg-white rounded-2xl">
                            <div className="flex justify-between">
                                <div className="text-2xl font-bold text-center"><span id="BidName">Period</span> - <span className="" id="betName">{showModal}</span></div>
                                <div className="p-1 text-white bg-gray-500 rounded-full cursor-pointer text-end" id="close-btn" onClick={() => setShowModal(false)}>
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2"
                                        fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-between p-4 mt-4 border rounded-lg shadow">
                                <div className="flex items-center">
                                    <span>Point</span>
                                    <span className="ml-2 text-3xl font-bold" id="userBal2">0</span>
                                </div>
                                <a href="add_money" className="px-8 py-3 text-white bg-yellow-400 rounded-full shadow-lg">Recharge</a>
                            </div>
                            <div className="mt-4 mb-2 text-xl text-gray-400">Contact Point</div>
                            <div className="grid grid-cols-4 gap-4 text-2xl font-bold text-center">
                                <div id="10" className="py-3 text-white bg-gray-800 border-2 border-gray-300 hover:border-gray-400 rounded-xl">10</div>
                                <div id="100" className="py-3 border-2 border-gray-300 hover:border-gray-400 rounded-xl">100</div>
                                <div id="1000" className="py-3 border-2 border-gray-300 hover:border-gray-400 rounded-xl">1000</div>
                                <div id="10000" className="py-3 border-2 border-gray-300 hover:border-gray-400 rounded-xl">10000</div>
                                <input type="hidden" id="pointBet" value="00" />
                            </div>
                            <div className="mt-4 mb-2 text-xl text-gray-400">Number</div>
                            <div className="grid grid-cols-5 gap-4 text-2xl font-bold text-center">
                                <div className="hover:border-gray-400 rounded-xl"></div>
                                <div className="py-3 border-2 border-gray-300 hover:border-gray-400 rounded-xl">-</div>
                                <div className="flex items-center justify-center text-4xl text-red-500" id="numberBid">1</div>
                                <div className="py-3 border-2 border-gray-300 hover:border-gray-400 rounded-xl">+</div>
                            </div>
                            <button className="w-full py-4 mt-4 text-xl font-bold text-white bg-blue-500 rounded-xl drop-shadow-lg confirm-btn">
                                Confirm </button>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25" onClick={() => setShowModal(false)}></div>
                </>
            ) : null}
            <MenuFooter />
        </div>
    </>
};
export default Dashboard;