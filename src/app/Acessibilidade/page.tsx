'use client'
import Subtitulo from '@/app/components/Subtitulo';
import './Acessibilidade.css';
import Image from 'next/image';
import subti from '../../Data/Subtitulo.json';
import textAcb from '../../Data/Text.json';
import Paragrafo from '@/app/components/Paragrafo';
import acb_img from '../images/acessibilidade.png'





const Acessibilidade = () =>{
     
return(
    <>
        <div className='box_acessibilidade'>
                <div className='box_acb'>
                        <div className='acessibilidade_text'>
                            <div className='acessibilidade_titles'>
                                        <Subtitulo text={subti.acessibilidade}/>
                            </div>
                            <div className='Acessecibilidade_desc'>
                                    <Paragrafo texto={textAcb.text_acb_um}/>
                                    <Paragrafo texto={textAcb.text_acb_dois}/>
                                    <Paragrafo texto={textAcb.text_acb_tres}/>
                            </div>
                        </div>
                        <div className='acessibilidade_image'>
                                <Image src={acb_img} alt="Simbolo Acessibilidade"/>
                        </div>
                </div>
        </div>
    </>
)
}

export default Acessibilidade;