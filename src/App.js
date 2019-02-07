import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="title-bar">
          <tbody>
            <tr>
              <td>
                <img width="50" src="logo.svg" alt="Movie DB"/>
              </td>
              <td style={{
                paddingLeft: 16
              }}>
                <h1>
                  MoviesDB Search
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
