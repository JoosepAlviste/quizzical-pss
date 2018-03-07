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
          <h1 className="title has-text-centered">Quizzes</h1>

          <VisibleQuizzesList />

          <div className="has-text-centered">
            <Link
              className="button is-primary button--main-action"
              to="/quizzes/create"
            >
              Create new
            </Link>
          </div>
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
