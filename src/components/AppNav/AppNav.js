import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
// import NotFound from '../NotFound';

class AppNav extends Component {


  render() {
    const authedUser = this.props;
    // console.log("Auth" + authedUser);
    return (
      <Navbar variant="dark" bg="dark" expand="sm">
        <Navbar.Brand to="/home">Whould You Rather</Navbar.Brand>
        <Nav>
          <Nav.Link to="/home" active>Home</Nav.Link>
          <Nav.Link to="/add">New Question</Nav.Link>
          <Nav.Link to="/leaderboard">Leaderboard</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* {"Hello, " + authedUser.name} */}
          </Navbar.Text>
          <Image className="avatar" src="#" alt="user avatar" />
          <Nav>
            <Nav.Link to="/login">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse >
      </Navbar >
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  console.log("LogedIn: ");
  console.log(authedUser);
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(AppNav);