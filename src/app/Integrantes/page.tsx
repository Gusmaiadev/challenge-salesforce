'use client'

import Subtitulo from '../components/Subtitulo/Subtitulo';
import './Integrantes.css'
import integrantesTitle from '../../Data/Subtitulo.json'
import Link from 'next/link'



const Integrantes = () => {
   

    return (
        <>
           <section className='container_integrantes'>
                   <div className='box_nomes'>
                            <div className='title_integrantes'>
                                    <Subtitulo text={integrantesTitle.sub_integrantes}/>
                            </div>

                            <div className='box_integrantes'>
                                    <p className='name_rm'> Gustavo Maia  RM:553270</p>
                                    <p className='name_rm'> Thiago Rocha  RM:553820</p>
                                    <p className='name_rm'> Pedro Araújo RM:553801</p>
                            </div>

                            <div className='title_integrantes'>
                                    <Subtitulo text={integrantesTitle.sub_repositório}/>
                            </div>

                            <div className='box_integrantes'>
                                    <a target='blank' href="https://github.com/Gusmaiadev/challenge-salesforce"><p className='name_rm'> Challenge Sales Force</p></a>  
                            </div>

                            <div className='title_integrantes'>
                                    <Subtitulo text={integrantesTitle.sub_video}/>
                            </div>

                            <div className='box_integrantes'>
                                    <a target='blank' href="https://youtu.be/FbMXmz-yvfM"><p className='name_rm'>Youtube</p></a>  
                            </div>
                   </div>
           </section>
        </>
    );
};

export default Integrantes;
