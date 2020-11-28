import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, ProgressBar } from 'react-bootstrap';

class Answered extends Component {
  render() {
    const { question } = this.props
    return (
      <Fragment>
        <Card.Title>Results:</Card.Title>
        <div className="box-container">
          <div>{question.optionOne.text}</div>
          <ProgressBar />
        </div>
        <div className="box-container">
          <div>{question.optionTwo.text}</div>
          <ProgressBar />
        </div>
      </Fragment>
    )
  }
}

export default connect()(Answered);