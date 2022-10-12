import { Component } from 'react';
import { Wrapper } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

const feedbackOptions = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = stateKey => () => {
    this.setState(prevState => {
      return { [stateKey]: prevState[stateKey] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    if (this.state.good > 0) {
      return (
        Math.floor((this.state.good / this.countTotalFeedback()) * 100) + '%'
      );
    }
    return 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Wrapper>
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={this.leaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Wrapper>
    );
  }
}