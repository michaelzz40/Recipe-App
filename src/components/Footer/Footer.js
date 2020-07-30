import React from "react";
import "./Footer.css";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";

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
          <a href='https://www.facebook.com/michaelzz/'>
            <img src={instagram} alt='' />
          </a>
          <img src={twitter} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
