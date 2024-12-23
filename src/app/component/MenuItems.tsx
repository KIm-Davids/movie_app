import Link from 'next/link';
import React from 'react';

interface MenuItemsProps {
    title: string;
    address: string;
    Icon: React.ElementType;
    textClass?: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({title, address, Icon, textClass}) => {
    return (
        <Link href={address} className="hover:text-skyblue-500">
            <Icon className="text-2xl sm:hidden hover:text-sky-500" />
            <p className="uppercase sm:inline hidden hover:text-blue-950 text-3xl font-mono">{title}</p>
        </Link>
    )
}
export default MenuItems