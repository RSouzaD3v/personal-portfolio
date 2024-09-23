'use client';
import Image from 'next/image';
import Logo from '@/assets/Logo---Cor-Padrão.png';
import { IoMdBook, IoMdHome } from 'react-icons/io';
import { AiFillApi } from 'react-icons/ai';
import { CgCommunity } from 'react-icons/cg';
import MobileHeader from './MobileHeader';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';

interface MenuItem {
    id: number;
    title: string;
    icon: React.ElementType;
    link: string;
}

const Header = () => {
    const [hidden, setHidden] = useState<boolean>(true);

    const openMenuMobile = () => {
        setHidden(false);
    }

    const closeMenuMobile = () => {
        setHidden(true);
    }

    const list: MenuItem[]  = [
        {
            id: 1,
            title: 'Home',
            icon: IoMdHome,
            link: ''
        },
        {
            id: 2,
            title: 'Blog',
            icon: IoMdBook,
            link: ''
        },
        {
            id: 3,
            title: 'API',
            icon: AiFillApi,
            link: ''
        },
        {
            id: 4,
            title: 'Comunidade',
            icon: CgCommunity,
            link: ''
        },
    ];

    return (
        <header className='flex justify-between items-center bg-white/5 p-3'>
            <div>
                <Image width={60} height={60} src={Logo} alt='logo' />
            </div>

            <ul className='hidden md:flex justify-around gap-5'>
                {list.map((item) => (
                    <li className='hover:bg-white/10 p-2 rounded-md' key={item.id}>
                        <a className='flex items-center gap-1' href="">
                            {<item.icon />}
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='hidden md:block'>
                <button className='bg-blue-500 text-white p-2 rounded-md'>Saiba Mais</button>
            </div>

            <div className='md:hidden'>
                <button onClick={openMenuMobile} className="hover:bg-white/20 text-3xl rounded-full p-2 md:hidden">
                    <BiMenu />
                </button>

                <button onClick={closeMenuMobile} className={`bg-red-500 p-3 absolute top-2 right-2
                w-[40px] h-[40px] flex items-center 
                justify-center rounded-full z-10
                ${hidden ? 'hidden' : 'absolute'}
                
                `}>X</button>

                <MobileHeader list={list} isHidden={hidden} />
            </div>
        </header>
    );
};

export default Header;