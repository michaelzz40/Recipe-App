import React from "react";
import "./Banner.css";
import image from "../../img/banner1.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div class='banner'>
      <img src={image} alt='' />
      <div className='container'>
        <div class='banner-content'>
          <h2 className='banner-title'>Explore tons of Recipes</h2>
          <p className='banner-intro'>
            Search massive amount of food recipes with 150.000+ recipes data
          </p>
          <Link to='/search' className='banner-btn'>
            Search now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
