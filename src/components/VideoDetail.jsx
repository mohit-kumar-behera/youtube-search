import React from 'react';

class VideoDetail extends React.Component {
  render() {
    if (!this.props.video) return '';

    const video = this.props.video;
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div className={`video-detail ${this.props.show ? 'show' : 'hide'}`}>
        <iframe title={video.snippet.title} src={videoSrc}></iframe>
        <div className="video-segment">
          <h4 className="title">{video.snippet.title}</h4>
          <p className="description">{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
