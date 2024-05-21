'use client'

import personagens from '../images/persons_sales.png'
import coca from '../images/coca-cola.png';
import amazon from '../images/Amazon.png';
import spotfy from '../images/Spotify.png'
import contenText from '../../Data/contenText.json'
import mulherUrso from '../images/mulher_urso.png';
import './Inicial.css'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Subtitulo from '@/app/components/Subtitulo/Subtitulo';
import textSub from '../../Data/Subtitulo.json'
import Secao from '../components/Secao/Secao';
   

const Inicial = () =>{

    return(
        <>
          <div className="box-container">
              <Secao
              titulo={contenText.titulo_um}
              texto={contenText.desc_um}
              imagem={personagens} width={500} height={500} />
        </div>

        <div className="subtitle_ini">
                <Subtitulo text={textSub.sub_2}/>
        </div>

          <div className="social_images">
              <Link href= "/Coca"><Image className="banner_social" src={coca} alt="Banner Coca Cola"/></Link>
              <Link href='/Amazon'><Image className="banner_social"  src={amazon} alt="Banner Amazon"/></Link>
              <Link href='/Spotfy'><Image className="banner_social"  src={spotfy} alt="Banner Spotfy"/></Link>
          </div>
      
          <Secao
              titulo={contenText.titulo_um}
              texto={contenText.desc_dois}
              imagem={mulherUrso} width={600} height={400} />
        </>
    )
}

export default Inicial;