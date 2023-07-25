import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  function onSearch() {
    fetchMovies(searchTitle);
  }
  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=a398627a&s=${searchTitle}`
    );
    setMovies(data);
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <section id="movies">
      <header id="header">
        <Nav />
        <div className="input__wrapper">
          <h1 className="input__header">Get info on you favorite movies</h1>
          <input
            type="text"
            onChange={(event) => setSearchTitle(event.target.value)}
            placeholder="search by name"
            className="form__input"
          />
          <button className="btn" onClick={onSearch}>
            Enter
          </button>
        </div>
      </header>
      <div>
        <div className="row">
          <div className="movies">
            {movies.Search?.map((movie) => (
              <div className="movie" key={movie.imdbID}>
                <div className="movie__wrapper">
                  <figure className="movie__img--figure">
                    <a href="">
                      <img className="movie__img" src={movie.Poster} alt="" />
                    </a>
                  </figure>
                  <div className="movie__info">
                    <h3 className="movie__title">{movie.Title}</h3>
                    <h3 className="movie__year">{movie.Year}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movies;
