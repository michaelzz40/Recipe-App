import React from "react";
import "./Footer.css";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import github from "../../img/github.png";

const Footer = () => {
  return (
    <section className='footer'>
      <div className='container copyright-items'>
        <div className='copyright'>
          <h2 className='copyright-text'>Copyright &copy; Michael 2020</h2>
        </div>
        <div className='social'>
          <a href='https://www.facebook.com/michaelzz/'>
            <img src={facebook} alt='' />
          </a>
          <a href='https://www.instagram.com/michaelzz40/'>
            <img src={instagram} alt='' />
          </a>
          <a href='https://github.com/michaelzz40'>
            <img src={github} alt='' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
