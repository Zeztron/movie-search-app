import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';

// api key: 1336c8a614e1ed70aa7aac2c1d1667e2

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}

    // const movies = [
    //   {
    //     id: 0,
    //     posterImage:
    //       "https://image.tmdb.org/t/p/w1280/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //     title: "Avengers: Infinity War",
    //     overview: "blah blah blah"
    //   },
    //   {
    //     id: 1,
    //     posterImage:
    //       "https://image.tmdb.org/t/p/w1280/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
    //     title: "The Avengers",
    //     overview: "blah blah blah blah"
    //   }
    // ];

    // let movieRows = [];
    // movies.forEach(movie => {
    //   const movieRow  = <MovieRow movie={movie}/>
    //   movieRows.push(movieRow)
    // });

    // this.state = {
    //   rows: movieRows
    // }

    this.performSearch();

  }

  performSearch() {
    const url = 
    $.ajax({
      url: url,
      success: (searchResults) => {
        console.log('fetched successfully');
      },
      error: (xhr, status, err) => {
        console.error('error');
      }
    })
  }

  render() {
    return (
      <div>
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
