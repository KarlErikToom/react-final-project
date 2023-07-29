import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import fight from "../assets/fight.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useSpring, animated, config } from "react-spring";

function Landing() {
  const [searchTitle, setSearchTitle] = useState("");
  const navigate = useNavigate();
  const [isContentVisible, setIsContentVisible] = useState(false);
  const fadeanimation = useSpring({
    opacity: isContentVisible ? 1 : 0,
    config: { duration: 1000 },
  });
  const slideAnimation= useSpring({
    opacity: isContentVisible? 1:0,
    transform: isContentVisible? "translateX(0)": "translateX(100%)",
    config: {duration:1000},
  })

  useEffect(() => {
    // Set a delay to trigger the animation after the component has mounted.
    const animationDelay = 500; // Adjust the delay as needed.
    setTimeout(() => {
      setIsContentVisible(true);
    }, animationDelay);
  }, []);

  function onSearch() {
    if (searchTitle.trim() !== "") {
      localStorage.setItem("searchQuery", searchTitle);
      navigate("/movies");
    }
  }
  function onSearchKeyPress(key) {
    if (key === "Enter") {
      onSearch();
    }
  }
  return (
    <section id="landing">
      <Nav />
      <div className="landing__wrapper">
        <animated.div className="landing__left" style={fadeanimation}>
          <div className="left__headers">
            <h1 className="left__header1">
              Fuel Your Entertainment Curiosity: Harnessing the OMDB API for
              Media Insights{" "}
            </h1>
            <h2 className="left__header2">
              We got Games, Books, Movies, Tv-shows, anything you would ever
              need
            </h2>
          </div>
          <div className="input">
            <h3 className="input__header">
              Seach for whatever your heart desires
            </h3>
            <input
              type="text"
              value={searchTitle}
              onChange={(event) => setSearchTitle(event.target.value)}
              onKeyPress={(event) => onSearchKeyPress(event.key)}
              placeholder="search by name"
              className="form__input"
            />
            <button className="btn input__btn" onClick={onSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </animated.div>
        <animated.div className="landing__right" style={slideAnimation}>
          <figure className="landing__figure">
            <img src={fight} alt="" className="landing__img" />
          </figure>
        </animated.div>
      </div>
    </section>
  );
}

export default Landing;
