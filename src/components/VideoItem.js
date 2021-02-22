import React from 'react';

const VideoItem = ({ video, clickMe }) => {
    console.log(video);

    const imgSrc = video.snippet.thumbnails.high.url;
    const title = video.snippet.title;

    return (
        <div className="item">
            <div className="ui small image">
                <img
                    src={imgSrc}
                    onClick={() => clickMe(video)}
                    style={{ cursor: "pointer" }}
                    width="500"
                    alt="Not available"
                />
            </div>
            <div className="content">
                <div className="description">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;