import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { removeAuthedUser } from '../../actions/authedUser';
import { setPath } from "../../actions/path";
import './AppNav.css';

class AppNav extends Component {

  render() {
    const { authedUser, path, logout, newPath } = this.props;
    return (
      <Navbar variant="dark" bg="dark" expand="sm">
        <Navbar.Brand>Whould You Rather</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Link
              to="/home"
              onClick={() => newPath("/home")}
              className={path === "/home" ? "active nav-link" : "nav-link"}
            >Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/add"
              onClick={() => newPath("/add")}
              className={path === "/add" ? "active nav-link" : "nav-link"}
            >New Question</Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/leaderboard"
              onClick={() => newPath("/leaderboard")}
              className={path === "/leaderboard" ? "active nav-link" : "nav-link"}
            >Leaderboard</Link>
          </Nav.Item>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {authedUser.name}
          </Navbar.Text>
          <Image className="avatar" src={"../../assets/images/" + authedUser.avatarURL} alt="user avatar" />
          <Nav>
            <Nav.Item>
              <Link onClick={() => logout()} to="/login" className="nav-link">Logout</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ authedUser, path }) => {
  return {
    authedUser,
    path
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newPath: (path) => dispatch(setPath(path)),
    logout: () => {
      dispatch(setPath("/home"));
      dispatch(removeAuthedUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);