import React from 'react'

export default function MovieCard({ movie })
{
 const handleError=(e)=>{
    e.target.src='images/default.jpg';
 }   
const handleRatingColour=(m)=>{
    if(m.rating>8)
      return 'rating-good';
    else if(m.rating>=5)
      return 'rating-ok';
    else
      return 'rating-bad';
  }

return(
    <div key={movie.id} className="movie-card">
          
          <img className='movie-card-img' src={`images/${movie.image}`}  alt={movie.title }  onError={handleError}/>
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className='movie-card-genre'>{movie.genre}</p>
          <p className={`movie-card-rating ${handleRatingColour(movie)}`} >{movie.rating}</p>
        </div>
);
}