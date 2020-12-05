import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from "react-router-bootstrap";
import { removeAuthedUser } from '../../actions/authedUser';
import './AppNav.css';


class AppNav extends Component {


  render() {
    const { authedUser, logout } = this.props;
    return (
      <Navbar variant="dark" bg="dark" expand="sm">
        <Navbar.Brand>Whould You Rather</Navbar.Brand>
        <Nav activeKey={window.location.pathname}>
          <LinkContainer to="/home">
            <Nav.Link eventKey="home">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/add">
            <Nav.Link eventKey="add">New Question</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/leaderboard">
            <Nav.Link eventKey="leaderboard">Leaderboard</Nav.Link>
          </LinkContainer>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {authedUser.name}
          </Navbar.Text>
          <Image className="avatar" src={"../../assets/images/" + authedUser.avatarURL} alt="user avatar" />
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/login" onClick={() => logout()}>
              <Nav.Link eventKey="login">Logout</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse >
      </Navbar >
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(removeAuthedUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);