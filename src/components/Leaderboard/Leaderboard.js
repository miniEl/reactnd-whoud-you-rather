import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Container, Image } from 'react-bootstrap';
import './Leaderboard.css';

class Leaderboard extends Component {
  render() {
    const { users } = this.props;
    // console.log(users);
    return (
      <Container className="user-card-container">
        {
          users.map((user, answered, created) => (
            answered = Object.keys(user.answers),
            created = Object.keys(user.questions),
            <Card expand="sm" className="user-card" key={user.id}>
              <Card.Body className="user-card-body">
                <div className="avatar-wrapper">
                  <Image className="avatar" src={"../../assets/images/" + user.avatarURL} alt="avatar" />
                </div>
                <div className="divider"></div>
                <div className="content-wrapper">
                  <Card.Title className="primary-text">{user.name}</Card.Title>
                  <Card.Text><span>Answered questions</span><span>{answered.length}</span></Card.Text>
                  <Card.Text><span>Created questions</span><span>{created.length}</span></Card.Text>
                </div>
                <div className="divider"></div>
                <Card className="score">
                  <Card.Header>
                    <Card.Title>Score</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="total-score">
                      <Card.Text>{answered.length + created.length}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          ))
        }
      </Container>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users),
  }
}

export default connect(mapStateToProps)(Leaderboard);