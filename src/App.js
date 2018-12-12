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
    const path = window.location.pathname
    if (path === '/') {
      return (
        <div className="App">
          < Navbar />
          <h1>WELCOME TO AFL STATS API! YOUR HOME FOR AFL FOOTY!!!!!!!🤙</h1>
          <img src="favicon.ico"></img>
        </div>
      )
    }
    else if (path === '/players/' || path ===  '/players') {
    return (
      <div className="App">
        < Navbar />
        <div id="player-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Games</th>
              <th>Goals</th>
            </tr>
            
            {this.state.players.map(player =>
              <tr>
                <td>
                  {player.first_name} {player.last_name}
                </td>
                <td>
                  {player.afl_team}
                </td>
                <td>
                  {player.afl_games || "-"}
                </td>
                <td>
                  {player.afl_goals || "-"}
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    );
  }
    else if (path === '/teams/' || path === '/teams' ) {
      function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    const teamsArray = this.state.players.map(player => player.afl_team)
    const uniqueTeam = teamsArray.filter( onlyUnique )
    console.log(uniqueTeam)
    return (
      <div className="App">
        < Navbar />
        <div id="team-table">
          <table>
            <tr>
              <th>Team</th>
            </tr>
            
            {uniqueTeam.map(team =>
              <tr>
                <td>
                  {team}
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    );
  }
  }
}

export default App;
