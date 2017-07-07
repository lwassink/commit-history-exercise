import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    }

    this.updateQuery = this.updateQuery.bind(this);
    this.requestHistory = this.requestHistory.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    this.requestHistory();
  }

  requestHistory() {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200) {
        this.props.setEvents(JSON.parse(xhr.responseText), true);
      } else {
        this.props.setEvents([], false);
      }
    }
    xhr.open(
      "GET",
      `https://api.github.com/users/${this.state.query}/events/public`,
      true
    );
    xhr.send();
  }

  updateQuery(event) {
    event.preventDefault();
    this.setState({ query: event.target.value });
  }

  render () {
    return(
      <form onSubmit={ this.handleSearch }>
        <label>
          Username:
          <input type="text"
            onChange={ this.updateQuery }
            value={ this.state.query }
            placeholder="Search for a GitHub user"
            />
        </label>

        <input type="submit" />
      </form>
    );
  }
}

export default Search;
