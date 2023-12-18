import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/herosection/HeroSection';
import FeaturedRaces from './components/featuredraces/FeaturedRaces';
import './App.css';
import NavigationBar from './components/navbar/NavigationBar';

function App() {

  // Example data for featured races and upcoming races
  const featuredRaces = [
    { name: 'Monaco Grand Prix', predictedWinner: 'Lewis Hamilton', abr: 'monaco' },
    { name: 'Italian Grand Prix', predictedWinner: 'Max Verstappen', abr: 'italy' },
    { name: 'British Grand Prix', predictedWinner: 'Valtteri Bottas', abr: 'britain' },
    // Add more featured races as needed
  ];

  return (
    <div className="app">
      <Header />
      <NavigationBar />
      <HeroSection />
      <FeaturedRaces races={featuredRaces}/>
    </div>
  );
}

export default App;
