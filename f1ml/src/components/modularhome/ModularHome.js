import React from 'react';
import TryItCard from '../tryit/TryItCard';
import FeaturedRaces from '../featuredraces/FeaturedRaces';
import './ModularHome.css';

const ModularHome = ({ featuredRaces }) => {
  return (
    <section className="race-section">
      <div className="card-section">
        <FeaturedRaces races={featuredRaces} />
        <TryItCard />
      </div>
    </section>
  );
};

export default ModularHome;