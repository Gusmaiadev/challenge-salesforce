'use client'
import '../Spotfy/Empresas.css'
import Image from 'next/image';
import Link from 'next/link';
import banner from '../images/tumbnail_coca.png'
import Banner from '@/app/components/Banner';
import Subtitulo from '@/app/components/Subtitulo/Subtitulo';
import subTitulo from '../../Data/Subtitulo.json'
import Paragrafo from '@/app/components/Paragrafo';
import textParagrafo from '../../Data/Text.json'
import Video from '@/app/components/Video';
import cardCoca from '../images/card_coca.png'
import cardAmazon from '../images/card_amazon.png'
import cardspotfy from '../images/card_spotfy.png'



const Coca = () =>{
    const urlDoVideo = 'https://www.youtube.com/watch?v=4krLNAdIZVI'; 
return(
    <>
        <Banner imagem={banner} altura={600} />

        <div className='box-empresa'>
                <div className='boxer'>
                    <div className='subtitle_desc'>
                            <Subtitulo text={subTitulo.sub_coca_um}/>
                    </div>
                    <div className='text_para'>
                            <Paragrafo texto={textParagrafo.text_coca_um}/>
                    </div>
                    <div className='video'>
                        <Video url={urlDoVideo}/>
                    </div>
                    <div className='text_para'>
                            <Paragrafo texto={textParagrafo.text_coca_dois}/>
                            <Paragrafo texto={textParagrafo.text_coca_tres}/>
                            <Paragrafo texto={textParagrafo.text_coca_quatro}/>
                            <Paragrafo texto={textParagrafo.text_coca_cinco}/>
                            
                    </div>

                    <div className='subtitle_desc card_space'>
                            <Subtitulo text={subTitulo.sub_spotfy_dois}/>
                    </div>
                    <div className='card'>
                            <Link href='/Spotfy'><Image src={cardspotfy} alt='Card Spotfy'/></Link>
                            <Link href='/Amazon'><Image src={cardAmazon} alt='Card Amazon'/></Link>
                    </div>
                </div>
        </div>
    </>
)
}

export default Coca;