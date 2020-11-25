import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Container } from 'react-bootstrap';
import './Question.css';

class Question extends Component {
  render() {
    const { users, question } = this.props;
    console.log('PROPS::');
    console.log(users);
    console.log(question);
    return (
      <Container className="que-container">
        <Card expand="sm" className="que-card">
          <Card.Header>
            <Card.Title className="primary-text">{users[question.author].name} asks:</Card.Title>
          </Card.Header>
          <Card.Body className="que-card-body">
            <div className="avatar-wrapper">
              <img className="avatar" src={"../../assets/images/" + users[question.author].avatarURL} alt="avatar" />
            </div>
            <div className="divider"></div>
            <div className="content-wrapper">
              <Card.Title>Would you rather</Card.Title>
              <Card.Text>{question.optionOne.text}? ...</Card.Text>
              <Button>View poll</Button>
            </div>

          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ authedUser, questions, users, id }) => {
  // const question = questions[id];
  console.log('Data >> ');
  console.log(questions);
  console.log(users);
  return {
    authedUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(Question);