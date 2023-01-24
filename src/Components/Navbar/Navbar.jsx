import React, { useEffect, useState, useRef } from "react";
import "./Nav.css";
import netflix from "../../assets/netflix.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ profile, setReset, isHomeScreen, setLoading }) => {
  if (!isHomeScreen) {
  }
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const referencia = useRef();

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
    <div className={`nav ${show && "nav__black"}`} ref={referencia}>
      <div className="nav__contents">
        <img
          src={netflix}
          alt=""
          className="nav__logo"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        />
        <div className={`nav__Categories ${show && "nav__Cat"}`}>
          <h3
            onClick={() => {
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
                window.scrollTo(0, 0);
              }
            }}
          >
            <Link className="links" to={"/categories/originals"}>
              Originals
            </Link>
          </h3>
          <h3
            onClick={() => {
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
                window.scrollTo(0, 0);
              }
            }}
          >
            <Link className="links" to={"/categories/trending"}>
              Trending
            </Link>
          </h3>
          <h3
            onClick={() => {
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
                window.scrollTo(0, 0);
              }
            }}
          >
            <Link className="links" to={"/categories/top_rated"}>
              top rated
            </Link>
          </h3>
          <h3
            onClick={() => {
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
                window.scrollTo(0, 0);
              }
            }}
          >
            <Link className="links" to={"/categories/horror"}>
              Horror movies
            </Link>
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
