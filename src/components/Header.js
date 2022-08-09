import React from 'react';
import logo from '../images/LOGO.svg';

function Header() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
        <button type="button">Login</button>
        <button type="button">Sing Up</button>
      </header>
    </div>
  );
}

export default Header;
