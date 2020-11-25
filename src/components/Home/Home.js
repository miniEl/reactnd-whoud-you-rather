import React, { Component } from 'react';
import { Card, Container, Tab, Tabs } from 'react-bootstrap';
import { connect } from 'react-redux';
import Question from './Question';

class Home extends Component {
  render() {
    // const { answered, unanswered } = this.props;
    return (
      <Container className="home-container">
        <Card expand="sm" className="home-card">
          <Card.Header>
            <Tabs defaultActiveKey="unanswered">
              <Tab eventKey="unanswered" title="Unanswered Questions">
                {Object.values(this.props.questions).map((question) => {
                  return (
                    <Question
                      key={question.id}
                      question={question}
                    // questionsToShow={questionsToShow}
                    />
                  );
                })}
              </Tab>
              <Tab eventKey="answered" title="Answered Questions">
                Answered Questions
              </Tab>
            </Tabs>
          </Card.Header>
        </Card>
      </Container>
    );
  }
}

const mapsStateToProps = ({ questions }) => {
  console.log("Questions:: ");
  console.log(questions);
  return {
    questions
  }
}

export default connect(mapsStateToProps)(Home);