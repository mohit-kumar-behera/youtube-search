import React from 'react';
import VideoCard from './VideoCard';

class VideoList extends React.Component {
  render() {
    const videos = this.props.videos;

    return (
      <div className={`video-list ${this.props.show ? 'show' : 'hide'}`}>
        <div className="video-list--title">
          <h3>{this.props.term}</h3>
          <small>{videos.length} found results</small>
        </div>
        <div className="video-list--videos">
          {videos.map((video, idx) => (
            <VideoCard
              key={video.id.videoId}
              index={idx}
              video={video}
              onClickSelect={this.props.onVideoSelect}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default VideoList;
