'use client'
import React, { useEffect, useState } from 'react';
import '../Produtos/Produto.css';
import Image from 'next/image';
import Link from 'next/link';
import Subtitulo from '../components/Subtitulo/Subtitulo';
import textTitle from '../../Data/Subtitulo.json'
import textProdutos from '../../Data/Text.json'; 
import BoxProduto from '../components/BoxProdutos/BoxProdutos';
import imgUm from '../images/produtos_einstein.png';
import imgDois from '../images/produtos_salesCloud.png';
import imgTres from '../images/produtos_serviceCloud.png';


const Produtos = () => {
   

    return (
        <>
           <section className='container_produtos'>
                    <div className='box_produtos'>
                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos}/>
                        </div>

                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_einstein}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_einstein} imagem={imgUm} />

                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_salesCloud}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_salesCloud} imagem={imgDois} />
                        
                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_serviceCloud}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_serviceCloud} imagem={imgTres} />





                    </div>
           </section>
        </>
    );
};

export default Produtos;
