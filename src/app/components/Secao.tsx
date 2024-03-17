import React from 'react';
import Image from 'next/image'; // Importa o componente Image do Next.js
import { StaticImageData } from 'next/image';

type SecaoProps = {
   titulo: string;
   texto: string;
   imagem: StaticImageData; // Modifica o tipo para aceitar StaticImageData
   width?: number; // Adiciona width como opcional
   height?: number; // Adiciona height como opcional
  };
  
  const Secao: React.FC<SecaoProps> = ({ titulo, texto, imagem, width = 600, height = 500 }) => {
   const estiloTitulo = {
      color: '#032D60',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '2rem',
      marginBottom: '10px',
   };
  
   const estiloTexto = {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1.2rem',
      width: '30vw',
   };
  
   return (
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', }}>
        <div style={{ }}>
          <h1 style={estiloTitulo}>{titulo}</h1>
          <p style={estiloTexto}>{texto}</p>
        </div>
        <div style={{ display: 'flex'}}>
          <Image src={imagem} alt="Imagem da seção" width={width} height={height} /> 
        </div>
      </div>
   );
  };
  
  export default Secao;