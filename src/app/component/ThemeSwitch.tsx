"use client"

import {MdLightMode, MdDarkMode} from 'react-icons/md';
import {BiMoon} from'react-icons/bi'
import {useTheme} from 'next-themes'

export default function ThemeSwitch() {
    const {theme, setTheme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme
    return (
        <div>
            {
                currentTheme === 'dark' ? <MdLightMode onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:text-yellow-400' /> :
                    <MdDarkMode onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:text-blue-400' />
            }
        </div>
    );
};
