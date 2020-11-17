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

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;
    console.log("Auth: " + authedUser);
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
                  <Route path="/home" extact component={Home} />
                  <Route path="/questions/:id" exact component={ViewQuestion} />
                  <Route path="/add/" exact component={NewQuestion} />
                  <Route path="/leaderboard" exact component={Leaderboard} />
                  <Route component={NotFound} />
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