import React from 'react';
import FeaturedRaceCard from '../featuredracecard/FeaturedRaceCard';
import './FeaturedRaces.css';

const FeaturedRaces = ({races}) => {
  return (
    <section className="featured-races">
      <h2>Featured Races</h2>
      <div className="card-container">
        {races.map((race, index) => (
          <FeaturedRaceCard key={index} {...race} />
        ))}
      </div>   
    </section>
  );
};

export default FeaturedRaces;