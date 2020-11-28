import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { setAuthedUser } from '../../actions/authedUser';
import './Login.css';

class Login extends Component {
  state = {
    selectedUser: ''
  }

  handleSelectedUser = (user) => {
    this.setState({
      selectedUser: user
    })
  }

  render() {
    const { users, authenticate } = this.props;
    return (
      <Container className="login-container">
        <Card expand="sm" className="login-card">
          <Card.Header>
            <Card.Title className="primary-text">Would You Rather!</Card.Title>
            <Card.Subtitle className="primary-text">Please sign in to play</Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Dropdown>
              <DropdownButton
                variant="light"
                id="dropdown-basic-button"
                title={
                  !this.state.selectedUser ?
                    "select a user" :
                    users[this.state.selectedUser].name
                }>
                {
                  users &&
                  Object.keys(users).map(user => (
                    <Dropdown.Item onSelect={() => this.handleSelectedUser(user)} key={user} value={user}>
                      <img className="avatar" src={"../../assets/images/" + users[user].avatarURL} alt="avatar" />
                      {users[user].name}
                    </Dropdown.Item>
                  ))
                }
              </DropdownButton>
            </Dropdown>
            <Button
              disabled={!this.state.selectedUser}
              onClick={() => authenticate(users[this.state.selectedUser])}
              type="submit"
              value="submit">
              Sign in
              </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (user) => {
      dispatch(setAuthedUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);