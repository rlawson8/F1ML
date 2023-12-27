import React from 'react';
import TryItCard from '../tryit/TryItCard';
import TryStratCard from '../trystrat/TryStratCard';
import FeaturedRaces from '../featuredraces/FeaturedRaces';
import './ModularHome.css';

const ModularHome = ({ featuredRaces }) => {
  return (
    <section className="race-section">
      <div className="card-section">
        <FeaturedRaces races={featuredRaces} />
      </div>
      <div className="card-sub-section"> 
        <div class="col-sm-6">
          <TryItCard />
        </div>
        <div class="col-sm-6">
          <TryStratCard />
        </div>
      </div>
    </section>
  );
};

export default ModularHome;