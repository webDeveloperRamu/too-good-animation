import Link from 'next/link'
import React, { useState } from 'react'
import navbarList from '../../constants/index'
import MegaMenu from './MegaMenu'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='fixed top-2 z-10 left-0 right-0 xl:px-4 px-3 py-1 bg-white rounded-[10px] lg:h-[60px] h-auto flex items-center justify-between md:mx-5'>
            {/* Brand and Logo */}
            <Link href={"/"} className='flex items-center md:gap-2 gap-1'>
                <img src="/assets/brandIcon.png" alt="Brand Image" className="md:w-12 md:h-10 h-8 w-8" />
                <span className='text-[25px] font-[vardana] text-slate-700 font-extrabold'>Ramu</span>
            </Link>

            {/* Navbar List (visible on large screens) */}
            <ul className={`inline-flex xl:gap-5 gap-3 ${isMenuOpen ? 'flex absolute top-[100%] left-0 w-full min-h-screen duration-500' : 'hidden'} xl:flex`}>
                {navbarList.map((_, index) => (
                    <li key={index} className='group font-semibold cursor-pointer hover:underline hover:underline-offset-[6px] hover:decoration-4 hover:decoration-[#FF0000]'>
                        <span>{_.name}</span>
                        {_.children && (
                            <MegaMenu children={_.children} />
                        )}
                    </li>
                ))}
            </ul>

            {/* Right section (Request call & My account) */}
            <div className="md:inline-flex md:gap-5 gap-1 grid grid-cols-2">
                <Link href={"#"} className='bg-transparent hover:bg-purple-100 border text-[blue] rounded-full md:px-5 md:py-2 px-2 py-1'>
                    Request call
                </Link>
                <Link href={"#"} className='bg-transparent hover:bg-purple-100 border text-[blue] rounded-full md:px-5 md:py-2 px-2 py-1'>
                    My account
                </Link>
            </div>

            {/* Mobile Hamburger Menu (toggle with state) */}
            <div className="xl:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
                {isMenuOpen ? (
                    // Close (X) Icon
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white transition-transform duration-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L17.94 6M18 18L6.06 6"
                        />
                    </svg>
                ) : (
                    // Hamburger Icon
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
            </div>
        </div>
    )
}

export default NavBar
