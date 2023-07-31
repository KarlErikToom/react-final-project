import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Nav from "../components/Nav";

function Movie() {
  const { imdbID } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMovie(imdbID) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=a398627a&i=${imdbID}`
    );

    setMovieData(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchMovie(imdbID);
  }, [imdbID]);
  return (
    <section id="movie">
      <Nav />
      <div className="container">
        <div className="row">
          {loading
            ? new Array(1)
                .fill(0)
                .map((element, index) => <div class="spinner"></div>)
            : movieData && (
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
                    <p className="selected__movie--awards">
                      {movieData.Awards}
                    </p>
                  </figure>
                  <div className="selected__movie--info">
                    <h3 className="selected__movie--title">
                      {movieData.Title}
                    </h3>
                    <h3 className="selected__movie--director">
                      <span className="span">Director: {""}</span>
                      {movieData.Director}
                    </h3>
                    <h3 className="selected__movie--writers">
                      <span className="span">Writers: {""}</span>

                      {movieData.Writer}
                    </h3>
                    <h3 className="selected__movie--actors">
                      <span className="span">Actors: {""}</span>

                      {movieData.Actors}
                    </h3>
                    <p className="selected__movie--plot">{movieData.Plot}</p>
                    <p className="selected__movie--genre">
                      {" "}
                      <span className="span">Genre: {""}</span>
                      {movieData.Genre}
                    </p>
                  </div>
                </div>
              )}
        </div>
      </div>
    </section>
  );
}

export default Movie;
