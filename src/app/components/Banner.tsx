import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type BannerProps = {
 imagem: StaticImageData;
 altura?: number;
};

const Banner: React.FC<BannerProps> = ({ imagem, altura = 300 }) => {
 
 const estiloBanner: React.CSSProperties = {
    width: '100%',
    height: `${altura}px`,
    overflow: 'hidden',
    position: 'relative', 
 };

 const estiloImagem: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
 };

 return (
    <div style={estiloBanner}>
      <Image src={imagem} alt="Banner" layout="fill" objectFit="cover" />
    </div>
 );
};

export default Banner;
