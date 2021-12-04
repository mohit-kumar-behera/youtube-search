import React from 'react';
import Searchbar from './components/Searchbar';
import Video from './components/Video';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import youtube from './api/youtube';
import './App.css';

class App extends React.Component {
  state = { videos: [], label: null, selectedVideo: null };

  componentDidMount() {
    this.handleSearchSubmit('');
  }

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSearchSubmit = async (term) => {
    if (term === '') return;
    this.setState({ label: 'Searching....' });

    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    if (response.status !== 200) return;

    const {
      data: { items },
    } = response;

    this.setState({ videos: items, label: null, selectedVideo: items[0] });
  };

  render() {
    return (
      <div className="main-container">
        <Searchbar
          searchSubmit={this.handleSearchSubmit}
          labelText={this.state.label}
        />
        <Video>
          <VideoDetail
            video={this.state.selectedVideo}
            show={this.state.videos.length ? true : false}
          />
          <VideoList
            videos={this.state.videos}
            show={this.state.videos.length ? true : false}
            onVideoSelect={this.handleVideoSelect}
          />
        </Video>
      </div>
    );
  }
}

export default App;
