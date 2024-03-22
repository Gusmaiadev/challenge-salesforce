
import React from 'react';

type VideoProps = {
    url: string;
    size: { width: string; height: string };
};

const Video: React.FC<VideoProps> = ({ url, size }) => {
    const videoId = new URL(url).searchParams.get('v');

    if (!videoId) {
        return <div>URL do vídeo do YouTube inválida.</div>;
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <iframe
            width={size.width}
            height={size.height}
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

export default Video;
