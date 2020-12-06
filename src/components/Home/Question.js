import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Container, Image } from 'react-bootstrap';
import { setPath } from '../../actions/path';
import { Link } from 'react-router-dom';
import './Question.css';


class Question extends Component {
  render() {
    const { users, question, newPath } = this.props;
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
              <Link
                className="btn btn-primary"
                onClick={() => newPath("/questions/" + question.id)}
                to={"/questions/" + question.id}
              >View Poll</Link>
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

const mapDispatchToProps = dispatch => {
  return {
    newPath: (path) => dispatch(setPath(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);