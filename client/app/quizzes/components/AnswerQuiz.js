// @flow
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../quizzical/elements/Modal';
import Button from '../../quizzical/elements/Button';
import { Quiz } from '../reducers/answerQuiz';
import AnswerQuizQuestion from './AnswerQuizQuestion';
import Page from '../../quizzical/elements/Page';
import MainActionButton from '../../quizzical/elements/MainActionButton';

type Props = {
  quiz?: Quiz,
  match: { params: { quizId: string } },
  fetchQuiz: (number) => void,
};

class AnswerQuiz extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.state = {
      userChoices: {},
      score: 0,
      showModal: false,
    };

    this.handleChoiceChanged = this.handleChoiceChanged.bind(this);
    this.handleFormSubmitted = this.handleFormSubmitted.bind(this);
    this.maxScore = this.maxScore.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    this.fetchQuiz();
  }

  fetchQuiz() {
    const { fetchQuiz, match } = this.props;

    fetchQuiz(parseInt(match.params.quizId, 10))
      .then(action => {
        const userChoices = {};
        action.quiz.questions.forEach(question => {
          userChoices[question.id] = null;
        });
        this.setState({ userChoices });

        return action;
      });
  }

  handleChoiceChanged(questionId, choiceId) {
    const userChoices = {
      ...this.state.userChoices,
      [questionId]: choiceId,
    };

    this.setState({ userChoices });
  }

  handleFormSubmitted(e) {
    e.preventDefault();

    this.setState({
      score: this.getScore(this.props.quiz.questions, this.state.userChoices),
      showModal: true,
    });
  }

  getScore(questions, userChoices) {
    let score = 0;

    questions.forEach(question => {
      question.choices.forEach(choice => {
        if (choice.correct && userChoices[question.id] === choice.id) {
          score += 1;
        }
      });
    });

    return score;
  }

  maxScore() {
    return this.props.quiz
      && this.props.quiz.questions
      && this.props.quiz.questions.length;
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  modalFooterContent() {
    return (
      <span>
        <Button
          className="is-wide"
          type="text"
          onClick={this.hideModal}
        >
          Try again
        </Button>

        <Link className="button is-primary is-wide" to="/">
          Done
        </Link>
      </span>
    );
  }

  questions() {
    return this.props.quiz && this.props.quiz.questions
      ? this.props.quiz.questions
      : [];
  }

  render() {
    return (
      <Page title={this.props.quiz.title}>

        <form onSubmit={this.handleFormSubmitted}>

          {this.questions().map(question => (
            <AnswerQuizQuestion
              key={question.id}
              question={question}
              onChoiceChanged={this.handleChoiceChanged}
            />
          ))}

          <MainActionButton buttonType="submit">
            Submit
          </MainActionButton>

        </form>

        <Modal
          isActive={this.state.showModal}
          title="You have finished this quiz!"
          footerContent={this.modalFooterContent()}
        >
          <p className="subtitle is-size-1 is-marginless">
            {this.state.score} / {this.maxScore()}
          </p>
          <p>Correct</p>
        </Modal>

      </Page>
    );
  }
}

AnswerQuiz.defaultProps = {
  quiz: null,
};

export default AnswerQuiz;

