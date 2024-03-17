import React from 'react';


type ParagrafoProps = {
 texto: string;
};

const Paragrafo: React.FC<ParagrafoProps> = ({ texto }) => {
 const estiloParagrafo: React.CSSProperties = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1rem',
    marginTop: '50px',
    color: 'black'
 };

 return (
    <p style={estiloParagrafo}>
      {texto}
    </p>
 );
};

export default Paragrafo;
