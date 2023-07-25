import React from "react";
import logo from "../assets/Logo-No-Backround.png";
import movie from "../assets/movie.svg";

function Landing() {
  return (
    <>
      <nav>
        <div className="nav__wrapper">
          <figure className="nav__logo--figure">
            <img src={logo} className="nav__logo" alt="" />
          </figure>
          <ul className="nav__list">
            <li className="nav__link">
              <a href="" className="nav__link--anchor">
                Home
              </a>
            </li>
            <li className="nav__link">
              <a href="" className="nav__link--anchor">
                Find a movie
              </a>
            </li>
            <li className="nav__link">
              <a href="" className="nav__link--anchor nav__link--primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section id="landing">
        <div className="row">
          <div className="landing__wrapper">
            <h1 className="landing__header">
              Estonias most awarded entertainment information platform
            </h1>
            <h2 className="landing__subheader">
              Find you favorite movie with Flixer
            </h2>
            <form className="landing__form" action="">
              <input
                placeholder="search by name"
                className="form__input"
                type="text"
              />
              <input type="button" value="submit" className="btn" />
            </form>
            <div className="landing__img--figure">
                <img src={movie} alt="" className="landing__img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
