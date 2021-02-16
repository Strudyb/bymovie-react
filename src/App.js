import "./App.css";
import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Profile from "./Profile";
import CreateBlog from "./CreateBlog";
import axios from "axios";

function App() {
  const API_KEY = "3cbd8c56b79a77f8e38f3ff57cf080be";
  const [movies, setMovies] = useState([]);
  const [blogs, setblogs] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  // get movies from api
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1`
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  // get blogs from express
  useEffect(() => {
    axios.get("/api").then((res) => {
      setblogs(res.data.blogs);
    });
  }, []);

  // search function
  const searchMovie = (query) => {
    console.log(query);
    if (query !== "" && query.length > 2) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        )
        .then((res) => {
          setSearchedMovies(res.data.results);
        });
    }
  };

  return (
    <div className="App">
      <Router>
        <Header searchMovie={searchMovie} />
        <Sidebar />

        <Switch>
          <Route exact path="/">
            {searchedMovies.length > 1 ? (
              <Movie key={searchedMovies.id} movies={searchedMovies} />
            ) : (
              <Movie key={movies.id} movies={movies} />
            )}
          </Route>

          <Route path="/movies/:id">
            <MovieDetails />
          </Route>

          <Route path="/blogs">
            <Blog blogs={blogs} />
          </Route>

          <Route path="/blog/:id">
            <BlogDetails blogs={blogs} />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/create-blog">
            <CreateBlog blogs={blogs} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
