import React from 'react';
import MenuFooter from '../componants/MenuFooter'

const HomeScreen = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src="https://img.yesclub.in/upload/public/image/20201020/6373880397242392666755503.jpg"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            OPPO A5S (Black, 3GB RAM, 32GB Storage) With No Cost
                                            EMI/Additional Exchange Offers
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">₹45000.00</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src="https://img.yesclub.in/upload/public/image/20201020/6373880371099721672987889.jpg"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            Tecno Spark 5 Pro (Seabed Blue, 4GB RAM, 64GB Storage)
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">₹34500.00</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src="https://img.yesclub.in/upload/public/image/20201020/6373880556211310276797702.jpg"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            Apple iPhone 11 (128GB) - Black (Includes EarPods, Power
                                            Adapter)
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">₹219000.00</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src="https://img.yesclub.in/upload/public/image/20201020/6373880609646667741241381.jpg"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            Tuzech Straight Artifact Ceramic Electronic Hair
                                            Straightening Brush Machine For Men and women
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">₹5000.00</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src="https://img.yesclub.in/upload/public/image/20201020/6373880845703111965020541.jpg"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            basics A3 cum A4 Lamination Machine
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">₹9000.00</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src="https://img.yesclub.in/upload/public/image/20201020/6373880855988257762244131.jpg"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            Fact Electronics Token Calling Display System for Banks,
                                            Hospitals, Hotels, Clinics
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">₹48000.00</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src="https://img.yesclub.in/upload/public/image/20201020/6373880883528020183096824.jpg"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            Portronics POR 343 UFO 6 Ports 8A Home Charging Station
                                            (White)
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">₹5200.00</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src="https://img.yesclub.in/upload/public/image/20201020/6373880954092781055981054.jpg"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            Sleeping Bed for Baby
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">₹3000.00</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src="https://img.yesclub.in/upload/public/image/20201020/6373880973054269112557216.jpg"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            BRANDONN Newborn 3 in 1 Wrapper/Baby Blanket/Bathgown Baby
                                            Bath Towel for Babies(Pink)
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">₹4000.00</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src="https://img.yesclub.in/upload/public/image/20201020/6373881041626651486266447.jpg"
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            ></span>
                                            Mom care Baby Knee & Elbow Guard
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">₹5000.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuFooter />
            </div>
        </div>
    );
};

export default HomeScreen;
