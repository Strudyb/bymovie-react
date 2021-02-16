import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movieDetail, setmovieDetail] = useState([]);
  const [similarMovies, setsimilarMovies] = useState([]);

  const IMAGES_API = "https://image.tmdb.org/t/p/w500/";

  // call movie details
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3cbd8c56b79a77f8e38f3ff57cf080be&language=en-US`
      )
      .then((response) => {
        setmovieDetail(response.data);
      });
  }, [id]);

  // call similar movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=3cbd8c56b79a77f8e38f3ff57cf080be&language=en-US&page=1`
      )
      .then((response) => {
        setsimilarMovies(response.data.results)
      })
  }, [id]);

  const similarClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="movie-details">
      <div className="movie-information-card">
        <div className="movie-information-img">
          <img
            width="100%"
            src={IMAGES_API + movieDetail.backdrop_path}
            alt=""
          />
        </div>
        <div className="movie-informations">
          <div className="genre-tags">
            {movieDetail.genres &&
              movieDetail.genres.map((genre) => (
                <div key={genre.id}>
                  <span>{genre.name}</span>
                </div>
              ))}
          </div>

          <h1>{movieDetail.title}</h1>
          {movieDetail.tagline && <h2>{`"${movieDetail.tagline}"`}</h2>}
          <p>{movieDetail.overview}</p>

          <div className="statistics-block">
            <div className="movie-rating">
              <span>
                <b>Avarage Rating:</b>{" "}
                <span className="rating">{movieDetail.vote_average}</span>
              </span>
              <span>
                <b>Popularity:</b>{" "}
                <span className="rating">{movieDetail.popularity}</span>
              </span>
              <span>
                <b>Release Date:</b>{" "}
                <span className="rating">{movieDetail.release_date}</span>
              </span>
            </div>
            <div className="revenue-budget">
              <span>
                <b>Budget:</b>{" "}
                <span className="rating">{movieDetail.budget}</span>
              </span>
              <span>
                <b>Revenue:</b>{" "}
                <span className="rating">{movieDetail.revenue}</span>
              </span>
              <span>
                <b>Status:</b>{" "}
                <span className="rating">{movieDetail.status}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="similar-movies-container">
        <h1 className="section-title">Similar Movies</h1>

        {similarMovies.map((similar) => (
          <div key={similar.id} className="similarMovie">
            <Link to={`/movies/${similar.id}`} onClick={similarClickHandler}>
              <img width="100%" src={IMAGES_API + similar.poster_path} alt="" />
              <h3 className="movie__title">{similar.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDetails;
