import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import VisibleQuizzesList from '../containers/VisibleQuizzesList';
import { fetchQuizzes } from '../actions';

type Props = {
  fetchQuizzes: () => void,
};

class QuizzesPage extends Component<Props> {
  props: Props;

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.fetchQuizzes();
  }

  render() {
    return (
      <div className="page--padding-top">
        <div className="container">
          <Link className="back-button" to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>

          <h1 className="title has-text-centered">Quizzes!</h1>

          <VisibleQuizzesList />

          <Link
            className="button is-info"
            to="/quizzes/create"
          >
            Create a new Quiz
          </Link>
        </div>
      </div>
    );
  }
}

QuizzesPage = connect(
  null,
  { fetchQuizzes },
)(QuizzesPage);

export default QuizzesPage;
