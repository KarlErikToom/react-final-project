import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import wait from "../assets/wait.svg";
import noImage from "../assets/noImage.png";
import {
  faMagnifyingGlass,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Movies() {
  const searchQuery = localStorage.getItem("searchQuery") || "";
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState(searchQuery);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  function onSearch() {
    setLoading(true)
    fetchMovies(searchTitle);
  }
  async function fetchMovies(searchTitle) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=a398627a&s=${searchTitle}`
    );
    if (data.Search) {
      for (const movie of data.Search) {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=a398627a&i=${movie.imdbID}`
        );
        Object.assign(movie, response.data);
      }
      setMovies(data);
    } else{
      setMovies([])
    }
    setLoading(false);
  }
  function onSearchKeyPress(key) {
    if (key === "Enter") {
      localStorage.setItem("searchQuery", searchTitle);
      onSearch();
    }
  }
  useEffect(() => {
    fetchMovies(searchQuery);
  }, [searchQuery]);
  return (
    <section id="movies">
      <header className="input__head">
        <div className="input__wrapper">
          <div className="input__header">
            <Link to={"/"} className="logo">MovieWiki</Link>
          </div>
          <div className="input">
            <input
              type="text"
              onChange={(event) => setSearchTitle(event.target.value)}
              onKeyPress={(event) => onSearchKeyPress(event.key)}
              placeholder="search by name"
              className="form__input"
            />
            <button className="btn input__btn" onClick={onSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div>
            {movies.Search === undefined ? (
              <div className="no-results">
                <div className="no-results__text">
                  <h1>We'll wait while you choose what to search for </h1>
                  <h2>
                    We got info on your favorite Movies, Tv-shows, books and
                    even games
                  </h2>
                  <h3>Whatever your looking for, we got it</h3>
                </div>
                <img className="no-results__img" src={wait} alt="" />
              </div>
            ) : loading ? (
              <div className="movies">
                {new Array(6).fill(0).map((element, index) => (
                  <div className="movie" key={element || index}>
                    <div className="movie__wrapper">
                      <figure className="movie__img--figure">
                        <a href="">
                          <img
                            className="movie__img movie__img--skeleton"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="movie__info">
                        <p className="movie__title--skeleton"></p>
                        <p className="movie__year--skeleton"></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="movies">
                {movies.Search?.slice(0, 6).map((movie) => (
                  <div className="movie" key={movie.imdbID}>
                    <div className="movie__wrapper">
                      <figure className="movie__img--figure">
                        <a href="">
                          <img
                            className="movie__img"
                            onClick={() => navigate(`${movie.imdbID}/`)}
                            src={
                              movie.Poster !== "N/A" ? movie.Poster : noImage
                            }
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="movie__info">
                        <p className="movie__title">{movie.Title}</p>
                        <p className="movie__rating">
                          <b>IMDB rating</b>
                          <FontAwesomeIcon
                            className="star"
                            icon={faStar}
                          />{" "}
                          <span className="rating">{movie.imdbRating}</span>
                        </p>
                        <p className="movie__summary">
                          {movie.Plot.substring(0, 90)}...
                        </p>
                        <p className="movie__type">
                          {" "}
                          <b className="bold">Type</b> {movie.Type}
                        </p>
                        <p className="movie__genre">
                          {" "}
                          <b>Genre</b> {movie.Genre}
                        </p>
                      </div>
                      <div className="movie__votes">
                        <FontAwesomeIcon icon={faThumbsUp} /> {movie.imdbVotes}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movies;
