import React from 'react';
import Header from '../components/Header';
import '../styles/inicialPage.css';

function InicialPage() {
  return (
    <div className="div1">
      <Header />
      <div className="inicialText">
        <h1>How One Supernova Measured The Universe</h1>
        <p>
          In 2015 astronomers successfully predicted the appearance of a
          supernova within a couple weeks. How did they do it?
        </p>
      </div>
      <div className="signUpDiv">
        <h3>Sign Up and watch this documentary and other titles!</h3>
        <div className="input-and-btn-div">
          <input
            type="text"
            placeholder="example@email.com"
            className="centerInput"
          />
          <button
            className="centerBtn"
            type="button"
          >
            Sign Up Now!
          </button>
        </div>
        <p>
          Ready to watch? Enter your email and enjoy the best of our content.
        </p>
      </div>
    </div>
  );
}

export default InicialPage;
