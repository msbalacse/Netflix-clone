import React from "react";
import "./Homescreen.css";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";

const Homescreen = () => {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      {/* row */}
    </div>
  );
};

export default Homescreen;
