import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { logo } from '../assets'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white md:bg-transparent">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <img src={logo} alt="Logo" className="h-16 w-auto" />

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link to="home" smooth={true} className="text-[#916c06] font-bold transition hover:text-gray-500/75">
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="about" smooth={true} className="text-[#916c06] font-bold transition hover:text-gray-500/75">
                                    ABOUT
                                </Link>
                            </li>
                            <li>
                                <Link to="services" smooth={true} className="text-[#916c06] font-bold transition hover:text-gray-500/75">
                                    OUR SERVICES
                                </Link>
                            </li>
                            <li>
                                <Link to="why-choose-us" smooth={true} className="text-[#916c06] font-bold transition hover:text-gray-500/75">
                                    WHY CHOOSE US
                                </Link>
                            </li>
                            <li>
                                <Link to="join-us" smooth={true} className="text-[#916c06] font-bold transition hover:text-gray-500/75">
                                    JOIN US
                                </Link>
                            </li>
                            <li>
                                <Link to="blog" smooth={true} className="text-[#916c06] font-bold transition hover:text-gray-500/75">
                                    BLOG
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="block rounded-full bg-[#916c06] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                                href="#"
                            >
                                CALL NOW
                            </a>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 text-white">
                    <ul className="flex flex-col items-center gap-4 py-4 text-center">
                        <li>
                            <Link to="home" smooth={true} className="font-bold transition hover:text-gray-300" onClick={() => setIsOpen(false)}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} className="font-bold transition hover:text-gray-300" onClick={() => setIsOpen(false)}>
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link to="services" smooth={true} className="font-bold transition hover:text-gray-300" onClick={() => setIsOpen(false)}>
                                OUR SERVICES
                            </Link>
                        </li>
                        <li>
                            <Link to="why-choose-us" smooth={true} className="font-bold transition hover:text-gray-300" onClick={() => setIsOpen(false)}>
                                WHY CHOOSE US
                            </Link>
                        </li>
                        <li>
                            <Link to="join-us" smooth={true} className="font-bold transition hover:text-gray-300" onClick={() => setIsOpen(false)}>
                                JOIN US
                            </Link>
                        </li>
                        <li>
                            <Link to="blog" smooth={true} className="font-bold transition hover:text-gray-300" onClick={() => setIsOpen(false)}>
                                BLOG
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Navbar;
