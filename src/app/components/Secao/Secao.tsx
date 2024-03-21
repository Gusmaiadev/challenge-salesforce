
import { StaticImageData } from 'next/image';

import React from 'react';
import Image from 'next/image';
import styles from './Secao.module.css'; 

type SecaoProps = {
 titulo: string;
 texto: string;
 imagem: StaticImageData;
 width?: number;
 height?: number;
};

const Secao: React.FC<SecaoProps> = ({ titulo, texto, imagem, width = 600, height = 500 }) => {
 return (
    <div className={styles.container_secao}>
      <div className={styles.descri_secao}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <p className={styles.texto}>{texto}</p>
      </div>
      <div className={styles.img_secao}>
        <Image src={imagem} alt="Imagem da seção" width={width} height={height} className={styles.imagem} /> 
      </div>
    </div>
 );
};

export default Secao;
