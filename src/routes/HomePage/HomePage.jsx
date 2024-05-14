import React from "react";
import "./HomePage.scss";
import SearchBar from "../../components/searchBar/SearchBar.jsx";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            a digital space where buyers, sellers, and realtors can connect to
            make or rent real estate contracts
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Year Of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>

            <div className="box">
              <h1>1200</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
