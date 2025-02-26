import React from 'react';
import { Card } from 'react-bootstrap';

function DashboardCard({ title, value, color }) {
  return (
    <Card style={{ backgroundColor: color, color: 'white', margin: '10px', width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{value}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DashboardCard;