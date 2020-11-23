import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Container } from 'react-bootstrap';

class Question extends Component {
  render() {
    const { user, question } = this.props;
    console.log('PROPS::');
    console.log(this.props);
    return (
      <Container className="que-container">
        <Card expand="sm" className="que-card">
          <Card.Header>
            <Card.Title>{user}asks:</Card.Title>
          </Card.Header>
          <Card.Body>
            Some Text here

          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ questions, users, id }) => {
  // const question = questions[id];
  console.log('Data >> ');
  console.log(questions);
  console.log(users);
  return {
    users,
    questions
  }
}

export default connect(mapStateToProps)(Question);