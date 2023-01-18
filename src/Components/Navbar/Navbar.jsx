import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflix from "../../assets/netflix.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
        <img
          onClick={() => {
            return navigate("/profile");
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
