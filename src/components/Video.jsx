import React from 'react';
import './Video.css';

class Video extends React.Component {
  render() {
    return <div className="video-container">{this.props.children}</div>;
  }
}

export default Video;
