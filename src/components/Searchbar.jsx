import React from 'react';
import './Searchbar.css';

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
        <form className="search-form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="search-videos">
            {this.props.labelText || 'Search Videos'}
          </label>
          <input
            className="search-input"
            id="search-videos"
            value={this.state.term}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
