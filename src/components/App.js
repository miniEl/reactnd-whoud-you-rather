import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNav from './AppNav/AppNav';
import Login from './Login/Login';
import Home from './Home/Home';
import Leaderboard from './Leaderboard/Leaderboard';
import NewQuestion from './NewQuestion/NewQuestion';
import ViewQuestion from './ViewQuestion/ViewQuestion';
import NotFound from './NotFound';
import Switch from 'react-bootstrap/esm/Switch';
// import { LinkContainer } from "react-router-bootstrap";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          {
            !authedUser ?
              <Fragment>
                <Login />
              </Fragment>
              :
              <Fragment>
                <AppNav />
                <Switch>
                  <Route extact path="/home" component={Home} />
                  <Route extact path="/questions/:id" component={ViewQuestion} />
                  <Route extact path="/add/" component={NewQuestion} />
                  <Route extact path="/leaderboard" component={Leaderboard} />
                  {/* <Route component={NotFound} /> */}
                </Switch>
              </Fragment>
          }
        </Fragment>
      </Router>

    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  console.log("authedUser: ");
  console.log(authedUser);
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);