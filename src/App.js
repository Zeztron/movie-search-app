import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';

// api key: 1336c8a614e1ed70aa7aac2c1d1667e2

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.performSearch();
  }

  performSearch(searchTerm) {
    const key = "1336c8a614e1ed70aa7aac2c1d1667e2";
    const url =
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=` + searchTerm;
    $.ajax({
      url: url,
      success: (searchResults) => {
        const results = searchResults.results;

        let movieRows = [];
        results.forEach((movie) => {
          // console.log(movie.title);
          movie.poster_src = 'https://image.tmdb.org/t/p/w1280' + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({
          rows: movieRows
        })
      },
      error: (xhr, status, err) => {
        console.error('error');
      }
    })
  }

  searchChangeHandler(event) {
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
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
          onChange={this.searchChangeHandler.bind(this)}
        />

        {this.state.rows}

      </div>
    );
  }
}

export default App;
