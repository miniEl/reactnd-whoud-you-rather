import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Form } from 'react-bootstrap';
import { answerQuestion } from '../../actions/questions';

class Unanswered extends Component {
  state = {
    selected: ''
  }

  selectedOption = (value) => {
    this.setState({
      selected: value
    });
  }

  submitOption = (event) => {
    event.preventDefault();

    const { dispatch, authedUser, question } = this.props;
    const { selected } = this.state;
    const qId = question.id;
    console.log(authedUser);
    console.log(question);
    dispatch(answerQuestion(authedUser, qId, selected));
  }

  render() {
    const { question } = this.props
    return (
      <Fragment>
        <Card.Title>Would you rather ...</Card.Title>
        <Form>
          <Form.Group>
            <Form.Check
              type="radio"
              name="option"
              id="optionOne"
              label={question.optionOne.text}
              onChange={() => { this.selectedOption('optionOne') }}
            />
            <Form.Check
              type="radio"
              name="option"
              id="optionTwo"
              label={question.optionTwo.text}
              onChange={() => { this.selectedOption('optionTwo') }}
            />
          </Form.Group>
          <Button
            type="submit"
            disabled={!this.state.selected}
            onClick={(event) => this.submitOption(event)}
          >
            Submit
          </Button>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authedUser, questions }) => {
  // console.log('Not Ans');
  return {
    authedUser,
    questions,
  }
}

export default connect(mapStateToProps)(Unanswered);