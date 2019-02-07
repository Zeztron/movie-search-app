import React, { Component } from 'react'

export default class MovieRow extends Component {
  render() {
    return (
        <table key={this.props.movie.id}>
            <tbody>
                <tr>
                    <td>
                        <img src={this.props.movie.poster_src} alt="Movie Poster" width="100" />
                    </td>
                    <td>
                        {this.props.movie.title}
                        <p>{this.props.movie.overview}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
  }
}
