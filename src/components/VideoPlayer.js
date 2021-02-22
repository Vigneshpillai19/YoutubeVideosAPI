import React from 'react';

const VideoPlayer = ({ video }) => {

    const videoId = video.id.videoId;
    console.log("Video: ", video);

    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="ui items">
            <iframe
                width="660"
                height="365"
                src={videoSrc}
                allowFullScreen
                title={videoId}
            />
            <div className="item">
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                    <div className="description">
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;