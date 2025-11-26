import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function MoviesGrid() {

  const [movies, setMovies] = useState([]);

  console.log("Movies before updated:", movies);

  useEffect(() => {
    fetch("movies.json")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='movies-grid'>
      {
      movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          
          <img className='movie-card-img' src={`images/${movie.image}`}  alt={movie.title } />
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className='movie-card-genre'>{movie.genre}</p>
          <p className='movie-card-rating'>{movie.rating}</p>
        </div>
      ))}
    </div>
  );
}