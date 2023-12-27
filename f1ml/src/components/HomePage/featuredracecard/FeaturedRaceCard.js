import React from 'react';
import Card from 'react-bootstrap/Card';

const FeaturedRaceCard = ({ name, predictedWinner, abr }) => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Predicted Winner: {predictedWinner}</Card.Subtitle>
        <Card.Link href={`/races/${abr}`}>View Predictions</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default FeaturedRaceCard;