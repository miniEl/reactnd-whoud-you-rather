import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { handleSaveQuestion } from '../../actions/shared';
import { Redirect } from 'react-router-dom';
import './NewQuestion.css';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    home: false
  }

  addOptionOne = (value) => {
    this.setState({
      optionOne: value.trim()
    });
  };
  addOptionTwo = (value) => {
    this.setState({
      optionTwo: value.trim()
    });
  };

  submitQuestion = (event) => {
    event.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { authedUser, dispatch } = this.props;
    const author = authedUser.id;
    const optionOneText = optionOne;
    const optionTwoText = optionTwo;
    dispatch(handleSaveQuestion({ author, optionOneText, optionTwoText }, '/home'));
  }

  render() {
    const { optionOne, optionTwo, home } = this.state;
    if (home)
      return <Redirect push to='/home' />
    return (
      <Container className="new-que-container">
        <Card expand="sm" className="new-que-card">
          <Card.Header>
            <Card.Title className="primary-text">Create New Question</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Title>Would you rather ...</Card.Title>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Option One"
                  onChange={(event) => this.addOptionOne(event.target.value)}
                />
              </Form.Group>
              <Card.Text>OR</Card.Text>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter Option Two"
                  onChange={(event) => this.addOptionTwo(event.target.value)}
                />
              </Form.Group>
              <Button
                type="submit"
                onClick={(event) => this.submitQuestion(event)}
                disabled={optionOne === '' || optionTwo === ''}
              >Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion);