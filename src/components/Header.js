import React from 'react';
import logoImg from '../images/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="header__link">
        <img src={logoImg} alt="Логотип Mesto" className="header__logo" />
      </a>
    </header>
  )
}
