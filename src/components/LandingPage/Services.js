import React from "react";
import "./Services.css";
import service1 from "../../img/service1.jpg";
import service2 from "../../img/service2.jpg";

const Services = () => {
  return (
    <section className='services'>
      <div className='container service-lists'>
        <div className='service-item'>
          <img src={service1} alt='' />
          <h2>Explore new ingredients</h2>
          <p>
            Find brand new ingredients that you've never heard of! Improve your
            creativity and imagination skills
          </p>
        </div>
        <div className='service-item'>
          <img src={service2} alt='' />
          <h2>Browse Food Database</h2>
          <p>
            With 150.000+ food recipes in database, allowing complete access to
            various recipes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
