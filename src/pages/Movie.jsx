import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Nav from "../components/Nav";

function Movie() {
  const { imdbID } = useParams();
  const [movieData, setMovieData] = useState([]);

  async function fetchMovie(imdbID) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=a398627a&i=${imdbID}`
    );
    setMovieData(data);
    console.log(data);
  }
  useEffect(() => {
    fetchMovie(imdbID);
  }, [imdbID]);
  return (
    <section id="movie">
      <Nav />
      <div className="container">
        <div className="row">
          {movieData && (
            <div className="movie__container">
              <figure className="selected__movie--figure">
                <img
                  src={movieData.Poster}
                  className="selected__movie--img"
                  alt=""
                />
                <p className="selected__movie--metascore">
                  metascore {movieData.Metascore}
                </p>
                <p className="selected__movie--awards">{movieData.Awards}</p>
              </figure>
              <div className="selected__movie--info">
                <h3 className="selected__movie--title">{movieData.Title}</h3>
                <h3 className="selected__movie--director">
                  {movieData.Director}
                </h3>
                <h3 className="selected__movie--writers">{movieData.Writer}</h3>
                <h3 className="selected__movie--actors">{movieData.Actors}</h3>
                <p className="selected__movie--plot">{movieData.Plot}</p>
                <p className="selected__movie--genre">{movieData.Genre}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Movie;