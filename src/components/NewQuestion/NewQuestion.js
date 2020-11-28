import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Container, Form } from 'react-bootstrap';
import './NewQuestion.css';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    OptopnTwo: '',
  }
  render() {
    return (
      <Container className="new-que-container">
        <Card expand="sm" className="new-que-card">
          <Card.Header>
            <Card.Title className="primary-text">Create New Question</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Title>Would you rather ...</Card.Title>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Enter Option One"></Form.Control>
              </Form.Group>
              <Card.Text>OR</Card.Text>
              <Form.Group>
                <Form.Control type="text" placeholder="Enter Option Two"></Form.Control>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  console.log('New:: ' + authedUser);
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion);