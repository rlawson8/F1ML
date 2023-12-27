import React from 'react';
import HeroSection from './components/HomePage/herosection/HeroSection';
import './App.css';
import NavigationBar from './components/HomePage/navbar/NavigationBar';
import ModularHome from './components/HomePage/modularhome/ModularHome';

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
      <NavigationBar />
      <HeroSection />
      <ModularHome featuredRaces={featuredRaces}/>
    </div>
  );
}

export default App;
