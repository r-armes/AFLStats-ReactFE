import React, { Component } from 'react';
import Navbar from './Navbar'
import './App.css';

class App extends Component {
  state = {players: []}
  componentDidMount() {
    fetch('/players')
      .then(res => res.json())
      .then(players => this.setState({ players }));
  }
  render() {
    return (
      <div className="App">
        < Navbar />
        {this.state.players.map(player =>
          <div key={player._id}>{player.first_name} {player.last_name}</div>
        )}
      </div>
    );
  }
}

export default App;
