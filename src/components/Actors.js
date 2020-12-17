import React from 'react';
import { actors } from '../data';

const displayActors = () => {
  return actors.map(actor =>
    <div key={actor.id}>
      <p><strong>{actor.name}</strong></p>
      <ul>
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>)
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { displayActors() }
    </div>
  );
};

export default Actors;
