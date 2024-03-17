import React from 'react';

// Defina um tipo para as props do componente
type SubProps = {
 text: string;
};

const Subtitulo: React.FC<SubProps> = ({ text }) => {
 const estiloSubtitulo = {
    color: '#032D60',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '2rem',
    fontWeight: '400'
 };

 return (
    <h1 style={estiloSubtitulo}>
      {text}
    </h1>
 );
};

export default Subtitulo;
