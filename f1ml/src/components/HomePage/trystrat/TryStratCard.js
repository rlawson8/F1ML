import React from 'react';
import Card from 'react-bootstrap/Card';
import './TryStratCard.css';

const TryItCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Explore Strategies</Card.Title>
        <Card.Text>
          Experiment with a wide variety of race factors to figure out optimal strategies.
        </Card.Text>
        <Card.Link href="/predictions">Click here to start!</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default TryItCard;