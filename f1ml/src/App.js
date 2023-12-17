import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/herosection/HeroSection';
import FeaturedRaces from './components/featuredraces/FeaturedRaces';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <FeaturedRaces />
    </div>
  );
}

export default App;
