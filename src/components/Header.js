import React from 'react';
import logo from '../images/LOGO.svg';
import '../styles/header.css';

function Header() {
  return (
    <div className="divHeader">
      <header className="head">
        <img className="logo" src={logo} alt="logo" />
      </header>
      <div className="divBtn">
        <button className="login" type="button">
          Login
        </button>
        <button className="singup" type="button">
          Sing Up
        </button>
      </div>
    </div>
  );
}

export default Header;
