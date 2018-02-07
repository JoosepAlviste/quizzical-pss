import React, { Component } from 'react';
import { Quiz } from '../reducers/answerQuiz';

type Props = {
  quiz?: Quiz,
  match: { params: { quizId: string } },
  fetchQuiz: (number) => void,
};

class AnswerQuiz extends Component<Props> {
  props: Props;

  componentDidMount() {
    this.fetchQuiz();
  }

  fetchQuiz() {
    const { fetchQuiz, match } = this.props;

    fetchQuiz(parseInt(match.params.quizId, 10));
  }

  render() {
    const { quiz } = this.props;
    // Check console or Quiz type for structure
    console.log(quiz);

    return (
      <h1>Hello world</h1>
    );
  }
}

AnswerQuiz.defaultProps = {
  quiz: null,
};

export default AnswerQuiz;
