import React from 'react';
import { move } from 'superagent';
import { movies } from '../data';

const moviesList = () => {
  return movies.map(movie =>
    <div>
      <p><strong>Title: {movie.title}</strong></p>
      <p>Time: {movie.time} mins</p>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>)
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { moviesList()}
    </div>
  );
};

export default Movies;
