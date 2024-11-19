"use clients";
import React from 'react'
import MenuItems from './MenuItems';
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from "react-icons/bs";
import Link from "next/link";
import ThemeSwitch from './ThemeSwitch';


const Header: React.FC = () => {
    return (
        <div>
                <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
                        <div className="flex gap-4">
                        <MenuItems title='home' address="/" Icon={AiFillHome}/>
                        <MenuItems title='about' address="/about" Icon={BsFillInfoCircleFill}/>
                    </div>
                    <div className='flex items-center gap-4'>
                        <ThemeSwitch />
                        <Link href={'/'} className="flex gap-1 items-center">
                            {/*<span>Watch Tv</span>*/}
                            <span className='text-2xl font-bold bg-sky-500 py-1 px-2 rounded-lg font-serif'>Next</span>
                            <span className='text-xl hidden sm:inline font-sans'>Movies</span>
                        </Link>
                    </div>

                </div>
        </div>
    )
}

export default Header