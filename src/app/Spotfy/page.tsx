'use client'
import './Empresas.css'
import Image from 'next/image';
import Link from 'next/link';
import banner from '../images/tumbnail_spotfy_.png'
import banner_dois from '../images/tumbnail_dois_spotfy.png'
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
    const urlDoVideo = 'https://www.youtube.com/watch?v=aimW_R3xnZw'; // URL do vídeo do YouTube
return(
    <>
        <Banner imagem={banner} altura={600} />

        <div className='box-empresa'>
                <div className='boxer'>
                    <div className='subtitle_desc'>
                            <Subtitulo text={subTitulo.sub_coca_um}/>
                    </div>
                    <div className='text_para'>
                            <Paragrafo texto={textParagrafo.text_spotfy_um}/>
                    </div>
                    <div className='video'>
                        <Video url={urlDoVideo}/>
                    </div>
                    <div className='text_para'>
                            <Paragrafo texto={textParagrafo.text_spotfy_dois}/>
                            <Paragrafo texto={textParagrafo.text_spotfy_tres}/>
                            <Paragrafo texto={textParagrafo.text_spotfy_quatro}/>
                            
                    </div>
                    <div className='banner_two'>
                        <Banner imagem={banner_dois} altura={300} />
                    </div>

                    <div className='subtitle_desc card_space'>
                            <Subtitulo text={subTitulo.sub_spotfy_dois}/>
                    </div>
                    <div className='card'>
                            <Link href='/Coca'><Image src={cardCoca} alt='Card Coca Cola'/></Link>
                            <Link href='/Amazon'><Image src={cardAmazon} alt='Card Amazon'/></Link>
                    </div>
                </div>
        </div>
    </>
)
}

export default Spotfy;