import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflix from "../../assets/netflix.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ profile }) => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      return window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          src={netflix}
          alt=""
          className="nav__logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className={`nav__Categories ${show && "nav__Cat"}`}>
          <h3
            onClick={() => {
              navigate("categories/originals");
            }}
          >
            Originals
          </h3>
          <h3
            onClick={() => {
              navigate("categories/trending");
            }}
          >
            Trending
          </h3>
          <h3
            onClick={() => {
              navigate("categories/top_rated");
            }}
          >
            Top rated
          </h3>
          <h3
            onClick={() => {
              navigate("categories/horror");
            }}
          >
            Horror movies
          </h3>
          <h3
            onClick={() => {
              navigate("categories/romance");
            }}
          >
            Romance movies
          </h3>
        </div>
        <img
          onClick={() => {
            profile ? navigate("/") : navigate("/profile");
          }}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
