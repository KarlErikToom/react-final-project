import React from "react";
import logo from "../assets/Logo-No-Backround.png"

function Nav() {
  return (
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
  );
}
export default Nav;