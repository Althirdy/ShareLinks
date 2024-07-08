import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { motion } from 'framer-motion';



export default function Navbar() {
    const links = [{
        label: 'Links',
        href: '/links',
        icon: <PiLinkSimpleBold />
    }, {
        label: 'Profile',
        href: '/profile',
        icon: <FaRegUser />
    }]

    return (
        // md:static bg-white p-3 fixed  bottom-0 z-20 w-[95%] md:w-full --Possible style in small screen of navigation bar
        <nav className=' flex items-center justify-between '>
            <div className='flex items-center gap-2'>
                <Logo />
                <h1 className='font-bold tracking-tight text-3xl text-blue-600'>ShareLinks</h1>
            </div>
            <div className='flex items-center gap-1'>
                <ul className='flex gap-1'>
                    {links.map((item, idx) => (
                        <NavLink to={item.href} key={idx} className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-1.5 rounded-md hover:text-blue-700 hover:bg-blue-100
                        ${isActive ? 'text-blue-700 bg-blue-100 ' : 'text-gray-500'} 
                        font-medium text-md transition ease-out`}
                        >
                            {item.icon}
                            <span className='hidden md:block'>{item.label}</span>
                        </NavLink>
                    ))}
                </ul>
                {/* <motion.button
                    whileHover={{ scale: 1.02 }}
                    className='text-blue-700 font-medium border text-sm border-blue-700 px-4 py-1.5 rounded-md'>
                    Preview
                </motion.button> */}
            </div>
        </nav>
    )
}
