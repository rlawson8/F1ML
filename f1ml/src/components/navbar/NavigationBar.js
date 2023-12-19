import React from 'react';
import './NavigationBar.css';
import logoImage from '../../images/FormulaForecast.png';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul>
        <li id="logo">
          <a href="/">
            <img src={logoImage} alt="Logo" style={{ height: '80px' }} />
          </a>
        </li>
        <li><a href="/predictions">Predictions</a></li>
        <li><a href="/schedule">Schedule</a></li>
        <li><a href="/about">About</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavigationBar;