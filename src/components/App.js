import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter as Router, Redirect, Route, withRouter } from 'react-router-dom';
import AppNav from './AppNav/AppNav';
import Login from './Login/Login';
import Home from './Home/Home';
import Leaderboard from './Leaderboard/Leaderboard';
import NewQuestion from './NewQuestion/NewQuestion';
import ViewQuestion from './ViewQuestion/ViewQuestion';
import Switch from 'react-bootstrap/esm/Switch';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData(this.props.location.pathname));
  }
  render() {
    const { authedUser, path } = this.props;
    return (
      <Router>
        {
          !authedUser ?
            <Fragment>
              <Redirect to={"/login"} />
              <Route exact path="/login" component={Login} />
            </Fragment>
            :
            <Fragment>
              <AppNav />
              <Switch>
                <Redirect to={path} />
                <Route extact path="/home" component={Home} />
                <Route extact path="/questions/:id" component={ViewQuestion} />
                <Route extact path="/add/" component={NewQuestion} />
                <Route extact path="/leaderboard" component={Leaderboard} />
              </Switch>
            </Fragment>
        }
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser, path }) => {
  return {
    authedUser,
    path
  }
}

export default withRouter(connect(mapStateToProps)(App));