import React from 'react';
import { directors } from '../data';

const displayDirectors = () => {
  return directors.map(director => 
    <div key={director.id}>
      <p><strong>{director.name}</strong></p>
      <ul>
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>)
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { displayDirectors() }
    </div>
  );
}

export default Directors
