'use client'
import './Footer.css'
import Image from 'next/image';
import Link from 'next/link';
import logo_sales from '../images/salesforcelogo.png';


const Footer = () =>{
return(
    <>
        <footer>
            <div className='container-box'>
                    <div className='logo'>
                            <Image className='logo_sales' src={logo_sales} alt='logo Sales Force'/>
                    </div>

                    <div className='desc_footer'>
                            <p>© Copyright 2022 Salesforce, Inc. All rights reserved . Various trademarks held by their respective owners.
                                 Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105,United States</p>
                    </div>
            </div>
        </footer>
    </>
)
}

export default Footer;