import Link from 'next/link';
import React from 'react';

interface MenuItemsProps {
    title: string;
    address: string;
    Icon: React.ElementType;
}

const MenuItems: React.FC<MenuItemsProps> = ({title, address, Icon}) => {
    return (
        <Link href={address} className="hover:text-skyblue-500">
            <Icon className="text-2xl sm:hidden hover:text-sky-500" />
            <p className="uppercase sm:inline hover:text-sky-500 text-sm">{title}</p>
        </Link>
    )
}
export default MenuItems