import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    console.log("hello");
    console.log(window.scrollY);
    if (window.scrollY > 10) {
      setShow(true);
      console.log("Te333st");
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    console.log("working");
    window.addEventListener("scroll", transitionNavbar, true);
    return () => window.removeEventListener("scroll", transitionNavbar, true);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
          className="nav__logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
