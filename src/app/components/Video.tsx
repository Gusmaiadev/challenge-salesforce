import React from 'react';

// Defina um tipo para as props do componente
type VideoProps = {
 url: string;
};

const Video: React.FC<VideoProps> = ({ url }) => {
 // Extrai o ID do vídeo da URL fornecida
 const videoId = new URL(url).searchParams.get('v');

 // Verifica se o ID do vídeo foi encontrado
 if (!videoId) {
   return <div>URL do vídeo do YouTube inválida.</div>;
 }

 // Monta a URL para incorporação do vídeo
 const embedUrl = `https://www.youtube.com/embed/${videoId}`;

 return (
   <iframe
     width="1000"
     height="555"
     src={embedUrl}
     title="YouTube video player"
     frameBorder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowFullScreen
   ></iframe>
 );
};

export default Video;
