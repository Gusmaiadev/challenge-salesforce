'use client'
import React, { useEffect, useState } from 'react';
import './Empresas.css'
import Image from 'next/image';
import Link from 'next/link';
import banner from '../images/tumbnail_spotfy_.png'
import banner2 from '../images/tumbnail2_spotfy.png'
import banner3 from '../images/tumbnail3_spotfy.png';
import Banner from '@/app/components/Banner';
import Subtitulo from '@/app/components/Subtitulo/Subtitulo';
import subTitulo from '../../Data/Subtitulo.json'
import Paragrafo from '@/app/components/Paragrafo';
import textParagrafo from '../../Data/Text.json'
import Video from '@/app/components/Video';
import cardCoca from '../images/card_coca.png'
import cardAmazon from '../images/card_amazon.png'
import cardspotfy from '../images/card_spotfy.png'



const Spotfy = () =>{
    const [bannerAtual, setBannerAtual] = useState(banner);
    const [videoSize, setVideoSize] = useState({ width: "1000", height: "555" });
    const urlDoVideo = 'https://www.youtube.com/watch?v=aimW_R3xnZw'; 

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 880) {
                setVideoSize({ width: "500", height: "450" }); 
            } else {
                setVideoSize({ width: "1000", height: "555" });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 850) {
                setBannerAtual(banner3);
            } else if (window.innerWidth <= 1700) {
                setBannerAtual(banner2);
            } else {
                setBannerAtual(banner);
            }
        };
    

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

return(
    <>
        <Banner imagem={bannerAtual} altura={600} />

        <div className='box-empresa'>
                <div className='boxer'>
                    <div className='subtitle_desc'>
                            <Subtitulo text={subTitulo.sub_coca_um}/>
                    </div>
                    <div className='text_para'>
                            <Paragrafo texto={textParagrafo.text_spotfy_um}/>
                    </div>
                    <div className='video'>
                        <Video url={urlDoVideo} size={videoSize}/>
                    </div>
                    <div className='text_para'>
                            <Paragrafo texto={textParagrafo.text_spotfy_dois}/>
                            <Paragrafo texto={textParagrafo.text_spotfy_tres}/>
                            <Paragrafo texto={textParagrafo.text_spotfy_quatro}/>
                            
                    </div>

                    <div className='subtitle_desc card_space'>
                            <Subtitulo text={subTitulo.sub_spotfy_dois}/>
                    </div>
                    <div className='card'>
                            <Link href='/Coca'><Image className='card_empresa' src={cardCoca} alt='Card Coca Cola'/></Link>
                            <Link href='/Amazon'><Image className='card_empresa' src={cardAmazon} alt='Card Amazon'/></Link>
                    </div>
                </div>
        </div>
    </>
)
}

export default Spotfy;