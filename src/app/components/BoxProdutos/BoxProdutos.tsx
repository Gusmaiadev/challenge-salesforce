'use client'

import React, { useLayoutEffect, useState } from 'react';
import '../BoxProdutos/BoxProdutos.css'; 
import Image from 'next/image'; 
import { StaticImageData } from 'next/image';

interface BoxProdutoProps {
    texto: string;
    imagem: StaticImageData; 
}

const BoxProduto: React.FC<BoxProdutoProps> = ({ texto, imagem }) => {
    const [isClient, setIsClient] = useState(false);

    useLayoutEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; 
    }

    return (
        <div className="box-container-produtos">
            <div className="texto-container">
                <p>{texto}</p>
            </div>
            <div className="imagem-container">
                <Image src={imagem} alt="Imagem do Box" layout="fill" objectFit="cover" />
            </div>
        </div>
    );
};

export default BoxProduto;
