import React from 'react';
import DSVLogo from '../assets/svg/logo.svg';
import ChevronRight from '../assets/svg/chevron-right.svg';
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
      <div className="main--container">
        <div id="top-spacer"></div>
        <div className="main--content">
          <h2>Login to DSV Name of service</h2>
          <div className="main--content--form">
            <input type="text" placeholder="User name:" />
            <input type="text" placeholder="Password:" />
            <div className="main--content--form--password-options">
              <a href="#">Forgot password?</a>
              <a href="#">Change password</a>
            </div>
            <div className="main--content--form--login-options">
              <div>
                <input type="checkbox" />
                <label>Remember Me</label>
              </div>
              <div>
                <label>LOGIN</label>
                <button>
                  <img src={ChevronRight}></img>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <h4>Information</h4>
          <p>
            The portal will be on available 3 November between 08:00 CET and 09:00 CET due to planned maintenance
          </p>
        </div>
        <div id="bottom-spacer"></div>
      </div>
      <div className="footer">
        <div>
          <a href="#">DSV Privacy Policy</a>
          <p>Copyright {String.fromCharCode(169)} DSV 2014-2017</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;