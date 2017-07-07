import React, { Component } from 'react';
import Search from './Search';
import './App.css';
import EventList from './EventList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      success: true
    }

    this.setEvents = this.setEvents.bind(this);
  }

  setEvents(events, success) {
    this.setState({ events, success });
  }

  render() {
    const warning = this.state.success ? <div /> : (<div className="warning">
      Unsuccessful search. Make sure you have entered the correct username.</div>)

    return (
      <div className="App">
        <h1>Github Commit History:</h1>

        { warning }

        <Search setEvents={ this.setEvents } />

        <EventList events={ this.state.events } />
      </div>
    );
  }
}

export default App;
