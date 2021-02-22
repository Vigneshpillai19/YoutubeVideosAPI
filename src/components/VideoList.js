import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onClickVideo }) => {

    const videosList = videos.map((item) => {
        return (
            <VideoItem key={item.id.videoId} video={item} clickMe={onClickVideo} />
        )
    })
    return (
        <div className="ui items">
            {videosList}
        </div>
    )
}

export default VideoList;