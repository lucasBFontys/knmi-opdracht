import Link from "next/link";
const Logo = "/logo.svg";

export default function Page() {
    return (
        <header>
            <nav className="px-4 lg:px-6 py-2.5 dark:">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="KNMI Logo" />
                    </a>

                    <div className="flex items-center lg:order-2">
                        <a className="w-10 h-10 flex items-center justify-center text-gray-800 border-2 border-gray-100 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 rounded-full mr-6 overflow-hidden">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png"
                                alt="taal"
                                className="w-full h-full object-cover"
                            />
                        </a>

                        <a
                            href="#"
                            className="text-white bg-blauw hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-body font-medium rounded-full hover:ring-blauw hover:ring-2 text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-3 dark: focus:outline-none"
                        >
                            Download
                        </a>

                        <button
                            className="w-12 h-12 flex items-center justify-center text-gray-800 border-gray-100 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 rounded-full">
                            <svg height="2000px" viewBox="0 0 512 512" width="1000px" >
                                <path d="M349.852,343.15c-49.875,49.916-131.083,49.916-181,0c-49.916-49.918-49.916-131.125,0-181.021  c13.209-13.187,29.312-23.25,47.832-29.812c5.834-2.042,12.293-0.562,16.625,3.792c4.376,4.375,5.855,10.833,3.793,16.625  c-12.542,35.375-4,73.666,22.25,99.917c26.209,26.228,64.5,34.75,99.916,22.25c5.792-2.062,12.271-0.582,16.625,3.793  c4.376,4.332,5.834,10.812,3.771,16.625C373.143,313.838,363.06,329.941,349.852,343.15z M191.477,184.754  c-37.438,37.438-37.438,98.354,0,135.771c40,40.021,108.125,36.416,143-8.168c-35.959,2.25-71.375-10.729-97.75-37.084  c-26.375-26.354-39.333-61.771-37.084-97.729C196.769,179.796,194.039,182.192,191.477,184.754z" fill="#1D1D1B" />
                            </svg>
                        </button>

                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 font-body"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a
                                    href=""
                                    className="block py-2 pr-4 pl-3 text-blauw border-b hover:underline lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:"
                                    aria-current="page"
                                >
                                    Over
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="block py-2 pr-4 pl-3 text-blauw border-b hover:underline lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="block py-2 pr-4 pl-3 text-blauw border-b hover:underline lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="block py-2 pr-4 pl-3 text-blauw border-b hover:underline lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:"
                                >
                                    Nieuws & Updates
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
