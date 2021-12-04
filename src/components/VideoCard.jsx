import React from 'react';
import './Video.css';

class VideoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: this.props.index === 0 ? true : false };
    this.videoRef = React.createRef();
  }

  handleVideoClick = () => {
    this.props.onClickSelect(this.props.video);

    const activeVideoEl = document.querySelector('.video-card.active');
    if (activeVideoEl) activeVideoEl.classList.remove('active');
    this.setState({ active: !this.state.active });
  };

  render() {
    const video = this.props.video;

    return (
      <div
        ref={this.videoRef}
        className={`video-card ${this.state.active ? 'active' : ''}`}
        onClick={this.handleVideoClick}
      >
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
        />
        <h5 className="video-title">{video.snippet.title}</h5>
      </div>
    );
  }
}

export default VideoCard;
