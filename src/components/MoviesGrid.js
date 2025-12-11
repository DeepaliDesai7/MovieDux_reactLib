import React, { useState, useEffect } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log("Movies before updated:", movies);

  useEffect(() => {
    fetch("movies.json")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }, []);

  const FilteredMovies=movies.filter((m)=>m.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const searchMovies=(e)=>{
  setSearchTerm(e.target.value);
  } 
  

  return (
    <div>
        <input className='search-input' type='text' placeholder='search movies...' value={searchTerm} onChange={searchMovies}></input>

    <div className='movies-grid'>
      {
      FilteredMovies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}></MovieCard>
      ))}
    </div>
     </div>
  );
}