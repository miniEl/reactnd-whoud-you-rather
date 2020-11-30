import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, ProgressBar } from 'react-bootstrap';

class Answered extends Component {
  render() {
    const { authedUser, options, totalVotes } = this.props
    return (
      <Fragment>
        <Card.Title className="primary-text">Results:</Card.Title>
        {
          options.map((option, per, selected) => (
            selected = option.votes.find(userVote => { return userVote === authedUser.id }),
            per = Math.floor(option.votes.length / totalVotes * 100),
            <div className={selected ? 'selected box-container' : 'box-container'} key={option.text}>
              <Card.Subtitle>{option.text}</Card.Subtitle>
              <ProgressBar now={per} label={`${per}%`} />
              <Card.Text>{option.votes.length} of {totalVotes} votes</Card.Text>
            </div>
          ))
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ authedUser }, { question }) => {
  const options = [question.optionOne, question.optionTwo];
  return {
    authedUser,
    options,
    totalVotes: question.optionOne.votes.length + question.optionTwo.votes.length
  }
}

export default connect(mapStateToProps)(Answered);