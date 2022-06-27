import React from "react"
import Card from "react-bootstrap/Card"
import AnthonyConnell from './AnthonyConnell.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={AnthonyConnell} />
        <Card.Body>
            <Card.Title>Anthony Connell</Card.Title>
            <Card.Text>
            Yoga Therapist looking to branch out and learn new things!
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard