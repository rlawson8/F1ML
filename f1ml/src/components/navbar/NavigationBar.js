import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/predictions">Predictions</a></li>
        <li><a href="/schedule">Schedule</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavigationBar;