import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav__wrapper">
        <Link to={"/"}  className="logo">MovieWiki</Link>
        <ul className="nav__list">
          <li className="nav__link">
            <Link to={"/movies"} className="nav__link--anchor">
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link to={"/movies"} className="nav__link--anchor">
              Find a movie
            </Link>
          </li>
          <li className="nav__link">
            <a href="" className="nav__link--anchor nav__link--primary">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;