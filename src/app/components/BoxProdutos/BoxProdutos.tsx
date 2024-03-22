// Box.js
import React from 'react';
import Image from 'next/image'; // Adicione esta linha
import '../BoxProdutos/BoxProdutos.css'; 
import { StaticImageData } from 'next/image';

interface BoxProdutoProps {
    texto: string;
    imagem: StaticImageData; // Modifique aqui para aceitar StaticImageData
}

const BoxProduto: React.FC<BoxProdutoProps> = ({ texto, imagem }) => {
    return (
        <div className="box-container">
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
