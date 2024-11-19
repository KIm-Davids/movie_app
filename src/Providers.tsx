'use client'
import React, {ReactNode} from 'react'
import {ThemeProvider} from "next-themes";

interface ProvidersProps {
    children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({children}) => {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <div className="text-gray-700 dark: text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colours duration-300">
                {children}
            </div>
        </ThemeProvider>
    )
}

export default Providers
