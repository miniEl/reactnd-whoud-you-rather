import React, { Component } from 'react';
import { Card, Container, Tab, Tabs } from 'react-bootstrap';
import { connect } from 'react-redux';
import Question from './Question';

class Home extends Component {
  render() {
    const { unanswered, answered } = this.props;
    return (
      <Container className="home-container">
        <Card expand="sm" className="home-card">
          <Card.Header>
            <Tabs defaultActiveKey="unanswered">
              <Tab eventKey="unanswered" title="Unanswered Questions">
                {
                  unanswered.map((question) => (
                    <Question
                      key={question.id}
                      question={question}
                    />
                  ))}
              </Tab>
              <Tab eventKey="answered" title="Answered Questions">
                {
                  answered.map((question) => (
                    <Question
                      key={question.id}
                      question={question}
                    />
                  ))}
              </Tab>
            </Tabs>
          </Card.Header>
        </Card>
      </Container>
    );
  }
}

const mapsStateToProps = ({ authedUser, questions }) => {
  const questionsList = Object.keys(questions).map((question) => {
    return questions[question];
  })
  return {
    unanswered: questionsList.filter((question) => {
      return !Object.keys(authedUser.answers).includes((question.id));
    }),
    answered: questionsList.filter((question) => {
      return Object.keys(authedUser.answers).includes((question.id));
    })

  }
}

export default connect(mapsStateToProps)(Home);