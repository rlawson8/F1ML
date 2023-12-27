import React from 'react';
import Card from 'react-bootstrap/Card';
import './TryItCard.css'

const TryItCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Try It for Yourself</Card.Title>
        <Card.Text>
          Experience the thrill of predicting race outcomes.
        </Card.Text>
        <Card.Link href="/predictions">Click here to start!</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default TryItCard;