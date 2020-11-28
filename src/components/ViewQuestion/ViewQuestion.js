import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Container, Image } from 'react-bootstrap';
import Unanswered from './Unanswered';
import Answered from './Answered';
import './ViewQuestion.css';

class ViewQuestion extends Component {
  render() {
    const { users, question } = this.props;
    console.log('View::');
    // console.log(users);
    console.log(question);
    return (
      <Container className="view-que-container">
        <Card expand="sm" className="que-card">
          <Card.Header>
            <Card.Title className="primary-text">
              {users[question.author].name}
              {
                !this.props.answered ?
                  ' asks:' :
                  ' asked:'
              }
            </Card.Title>
          </Card.Header>
          <Card.Body className="que-card-body">
            <div className="avatar-wrapper">
              <Image className="avatar" src={"../../assets/images/" + users[question.author].avatarURL} alt="avatar" />
            </div>
            <div className="divider"></div>
            <div className="content-wrapper">
              {
                !this.props.answered ?
                  <Unanswered question={question} /> :
                  <Answered question={question} />
              }
            </div>

          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  console.log('View Que::');
  const id = props.match.params.id;
  console.log(questions);

  return {
    users,
    question: questions[id],
    answered: authedUser.answers[id]
  }
}

export default connect(mapStateToProps)(ViewQuestion);