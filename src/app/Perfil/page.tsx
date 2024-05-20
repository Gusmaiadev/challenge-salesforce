'use client'

import './Perfil.css';
import Link from 'next/link'
import Image from 'next/image';
import Imgper from '../images/perfil.png'



const Perfil = () => {
   

    return (
        <>
           <section className='box-perfil'> 
                <div className='picture-perfil'>
                        <Image className='img-mascote' src={Imgper} alt="Foto perfil" />
                </div>

                <div className='dados-perfil'>
                    <div className='title-perfil'>
                        <h1 className='title-dados'>Seus Dados</h1>
                    </div>

                    <div className='dados-info'>
                        <div className='dados-list'>
                            <h3>Nome completo</h3>
                            <p></p>
                        </div>
                        <div className='dados-list'>
                            <h3>CPF</h3>
                            <p></p>
                        </div>
                        <div className='dados-list'>
                            <h3>Cargo</h3>
                            <p></p>
                        </div>
                        <div className='dados-list'>
                            <h3>Telefone</h3>
                            <p></p>
                        </div>
                        <div className='dados-list'>
                            <h3>Nome da empresa</h3>
                            <p></p>
                        </div>
                        <div className='dados-list'>
                            <h3>Quantidade de funcionários</h3>
                            <p></p>
                        </div>
                        <div className='dados-list'>
                            <h3>Renda Mensal</h3>
                            <p></p>
                        </div>
                        <div className='dados-list'>
                            <h3>Setor de atuação</h3>
                            <p></p>
                        </div>
                        <div className='dados-list'>
                            <h3>E-mail</h3>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className='buttons-perfil'>
                    <Link href='/Editar'><button className='button-action'>Editar Dados</button></Link>
                    <Link href='/'><button className='button-action'>Sair</button></Link>
                </div>
           </section>
        </>
    );
};

export default Perfil;
