import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Container, Image, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Question.css';

class Question extends Component {
  render() {
    const { users, question } = this.props;
    return (
      <Container className="que-container">
        <Card expand="sm" className="que-card que">
          <Card.Header>
            <Card.Title className="primary-text">{users[question.author].name} asks:</Card.Title>
          </Card.Header>
          <Card.Body className="que-card-body">
            <div className="avatar-wrapper">
              <Image
                className="avatar"
                src={"../../assets/images/" + users[question.author].avatarURL}
                alt={users[question.author].name} />
            </div>
            <div className="divider"></div>
            <div className="content-wrapper">
              <Card.Title>Would you rather</Card.Title>
              <Card.Text>{question.optionOne.text}? ...</Card.Text>
              <LinkContainer to={"questions/" + question.id}>
                <Nav.Link className="btn btn-primary" eventKey={"questions/" + question.id}>View poll</Nav.Link>
              </LinkContainer>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ users, questions }) => {
  return {
    users,
    questions
  }
}

export default connect(mapStateToProps)(Question);