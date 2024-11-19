"use clients";
import React from 'react'
import MenuItems from './MenuItems';
import {AiFillHome, AiOutlineStar} from 'react-icons/ai'
import Link from "next/link";
import ThemeSwitch from './ThemeSwitch';
import {BiHeart} from "react-icons/bi";


const Header: React.FC = () => {
    return (
        <div>
                <div className="flex justify-between items-center p-3 max-w-6xl mx-auto lg:mx-20 lg:max-w-full">
                        <div className="flex gap-4">
                        <MenuItems title='home' address="/" Icon={AiFillHome} textClass="hidden sm:inline text-xl"/>
                            <MenuItems title='popular' address="/popular" Icon={AiOutlineStar} textClass="hidden sm:inline"/>
                            <MenuItems title='favourite' address="/favourite" Icon={BiHeart} textClass="hidden sm:inline hover:text-pink-400"/>
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