import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    const movies = [
      {
        id: 0,
        title: "Avengers",
        overview: "blah blah blah"
      },
      {
        id: 1,
        title: "Avengers 2",
        overview: "blah blah blah blah"
      }
    ];

    this.state = {
      rows: [
        <p key="1">This is my row0</p>,
        <p key="2">This is my row1</p>,
        <p key="3">This is my row2</p>
      ]
    };

    let movieRows = [];

    movies.forEach(movie => {
      console.log(movie.title);
      movieRows.push(<p>movie title: {movie.title}</p>)
    });

    this.state = {
      rows: movieRows
    }

  }

  render() {
    return (
      <div className="App">
        <table className="title-bar">
          <tbody>
            <tr>
              <td>
                <img width="50" src="logo.svg" alt="Movie DB" />
              </td>
              <td
                style={{
                  paddingLeft: 16
                }}
              >
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          className="search-bar"
          type="text"
          placeholder="Enter search term"
        />

        {this.state.rows}

      </div>
    );
  }
}

export default App;
