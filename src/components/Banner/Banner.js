import React from "react";
import "./Banner.css";
const Banner = () => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie title</h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          debitis eius corrupti tenetur neque odit voluptas? Similique,
          blanditiis quas cupiditate, veritatis nesciunt ipsam dolorum,
          inventore amet optio omnis nulla quibusdam.`,
            100
          )}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
