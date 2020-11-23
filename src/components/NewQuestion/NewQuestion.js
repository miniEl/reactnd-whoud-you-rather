import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Container } from 'react-bootstrap';

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

          </Card.Header>
          <Card.Body>

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