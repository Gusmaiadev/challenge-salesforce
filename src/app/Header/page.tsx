'use client'
import React, { useState, useEffect } from 'react';
import './Header.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/salesforcelogo.png';
import person from '../images/person.png';
import menu from '../images/menuHeader.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth < 770) {
                setMenuOpen(false); // Fecha o menu se a largura da tela for menor que 770px
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header>
                <div className='container'>
                    <div className='logo'>
                        <Image className='sales_logo' src={logo} alt='Logo Sales Force'/>
                    </div>

                    <nav className='navegation'>
                        {(windowWidth >= 770 || !menuOpen) && (
                            <div className='menu_navegation'>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/Produtos">Produtos</Link></li>
                                    <li><Link href="/Acessibilidade">Acessibilidade</Link></li>
                                    <li><Link href="/Integrantes">Integrantes</Link></li>
                                </ul>
                            </div>
                        )}
                        
                        <div className='info_navegation'>
                            <div className='box_login'>
                                <Link href='/Login'><Image className='icon_person' src={person} alt='login'/></Link>
                            </div>
                        </div>
                    </nav>

                    <div className='menu_icon' onClick={toggleMenu}>
                        <Image className='menuHeader' src={menu} alt='menu' />
                    
                    {menuOpen && windowWidth < 770 && (
                        <div className='menu_content'>
                            <ul>
                                <li><Link href="#">Link 1</Link></li>
                                <li><Link href="#">Link 2</Link></li>
                                <li><Link href="#">Link 3</Link></li>
                                <li><Link href="#">Link 4</Link></li>
                                <li><Link href="#">Link 5</Link></li>
                            </ul>
                        </div>
                    )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
