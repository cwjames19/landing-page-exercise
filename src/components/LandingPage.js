import React from 'react';
import DSVLogo from '../assets/svg/logo.svg';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return(
    <div className="landing-page">
      <div className="banner">
        <div className="banner-content">
          <img src={DSVLogo} alt="DSV Logo" />
          <h3>Name of self service</h3>
        </div>
      </div>
      <div className="main">
      
      </div>
      <div className="footer">
      
      </div>
    </div>
  );
}

export default LandingPage;