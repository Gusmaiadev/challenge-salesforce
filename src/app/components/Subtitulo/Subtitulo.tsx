'use client'
import React, { useState, useEffect } from 'react';
import './Subtitulo.css'; // Importe o arquivo CSS

type SubProps = {
 text: string;
};

const Subtitulo: React.FC<SubProps> = ({ text }) => {
 const [estiloSubtitulo, setEstiloSubtitulo] = useState({
    color: '#032D60',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '2rem',
    fontWeight: '400'
 });

 const atualizarEstilo = () => {
    if (window.innerWidth <= 1080) {
      setEstiloSubtitulo({
        ...estiloSubtitulo,
        fontSize: '1.5rem' 
      });
    } else if (window.innerWidth <= 600) {
      setEstiloSubtitulo({
        ...estiloSubtitulo,
        fontSize: '1rem' 
      });
    } else {
      setEstiloSubtitulo({
        ...estiloSubtitulo,
        fontSize: '2rem'
      });
    }
 };

 useEffect(() => {
    window.addEventListener('resize', atualizarEstilo);
    atualizarEstilo();
    return () => window.removeEventListener('resize', atualizarEstilo);
 }, []); 

 return (
    <h1 style={estiloSubtitulo} className="subtitulo">
      {text}
    </h1>
 );
};

export default Subtitulo;
