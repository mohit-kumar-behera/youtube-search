import React from 'react';
import VideoCard from './VideoCard';

class VideoList extends React.Component {
  render() {
    const videos = this.props.videos;

    return (
      <div className={`video-list ${this.props.show ? 'show' : 'hide'}`}>
        {videos.map((video, idx) => (
          <VideoCard
            key={video.id.videoId}
            index={idx}
            video={video}
            onClickSelect={this.props.onVideoSelect}
          />
        ))}
      </div>
    );
  }
}

export default VideoList;
