import React from 'react';
import './Searchbar.css';
import logo from '../clip.png';

class Searchbar extends React.Component {
  state = { term: '' };

  handleInputChange = (ev) => {
    this.setState({ term: ev.target.value });
  };

  handleFormSubmit = (ev) => {
    ev.preventDefault();

    this.props.searchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <div className="logo--div">
          <img src={logo} className="logo" />
          <span className="logo-title">
            <span className="main">YouTube</span>
            <span className="sub">Search</span>
          </span>
        </div>
        <form className="search-form" onSubmit={this.handleFormSubmit}>
          <input
            className="search-input"
            id="search-videos"
            value={this.state.term}
            onChange={this.handleInputChange}
            placeholder="Search"
          />
          <button type="submit" className="search-submit">
            {this.props.labelText || 'Go'}
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
