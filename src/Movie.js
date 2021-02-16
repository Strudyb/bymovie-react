import React from "react";
import { Link } from "react-router-dom";

import "./Movie.css";

function Movie({ movies }) {
  const IMAGES_API = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="movie">
      <h1>New Releases</h1>
      {movies.map((movie) => (
        <div key={movie.id} className="movieItem">
          <img src={movie.poster_path ? IMAGES_API + movie.poster_path : 'https://via.placeholder.com/500x750'} alt="" />
          <h3 className="movie__title">{movie.title}</h3>
          <Link className="details-btn" to={`/movies/${movie.id}`} >Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Movie;
