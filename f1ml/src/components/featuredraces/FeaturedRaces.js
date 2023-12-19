import React from 'react';
import FeaturedRaceCard from '../featuredracecard/FeaturedRaceCard';
import './FeaturedRaces.css';
import Card from 'react-bootstrap/Card';

// const FeaturedRaces = ({races}) => {
//   return (
//     <section className="featured-races">
//       <h2>Upcoming Races</h2>
//       <div className="card-container">
//         {races.map((race, index) => (
//           <FeaturedRaceCard key={index} {...race} />
//         ))}
//       </div>   
//     </section>
//   );
// };

const FeaturedRaces = ({races}) => {
  return (
    <Card id="frcard">
      <Card.Body>
        <Card.Title>Upcoming Races</Card.Title>
        <div className="card-container">
          {races.map((race, index) => (
            <FeaturedRaceCard key={index} {...race} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default FeaturedRaces;