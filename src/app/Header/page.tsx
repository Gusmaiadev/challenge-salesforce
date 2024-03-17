'use client'
import './Header.css'
import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/salesforcelogo.png'
import person from '../images/person.png'


const Header = () =>{
return(
    <>
        <header>
                <div className='container'>
                        <div className='logo'>
                            <Image className='sales_logo' src={logo} alt='Logo Sales Force'/>
                        </div>

                        <nav className='navegation'>
                                <div className='menu_navegation'>
                                        <ul>
                                            <li><Link href="/">Home</Link></li>
                                            <li><Link href="#">Produtos</Link></li>
                                            <li><Link href="/Acessibilidade">Acessibilidade</Link></li>
                                            <li><Link href="#">Integrantres</Link></li>
                                            
                                        </ul>
                                </div>
                                   
                                <div className='info_navegation'>

                                    <div className='box_login'>
                                    <Link href='#'><Image className='icon_person' src={person} alt='login'/></Link>
                                     </div>
                                </div>
                        </nav>
                </div>
        </header>
    </>
)
}

export default Header;