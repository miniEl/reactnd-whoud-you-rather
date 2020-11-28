import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Form } from 'react-bootstrap';

class Unanswered extends Component {
  render() {
    const { question } = this.props
    return (
      <Fragment>
        <Card.Title>Would you rather ...</Card.Title>
        <Form>
          <Form.Group>
            <Form.Check type="radio" name="formHorizontalRadios" label={question.optionOne.text}></Form.Check>
            <Form.Check type="radio" name="formHorizontalRadios" label={question.optionTwo.text}></Form.Check>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ authedUser, questions }) => {
  return {
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(Unanswered);