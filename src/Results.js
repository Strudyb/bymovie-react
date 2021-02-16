import React from "react";

import "./Results.css";

function Results({ searchResult }) {
  const IMAGES_API = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="movie">
      <h1>Search Results</h1>
      {searchResult.map((result) => (
        <div key={result.id} className="movieItem">
          <img src={result.poster_path !== null ? IMAGES_API + result.poster_path : 'https://via.placeholder.com/500x750.png'} alt="" />
          <p>{result.original_title}</p>
          <p></p>
        </div>
      ))}
    </div>
  );
}

export default Results;
