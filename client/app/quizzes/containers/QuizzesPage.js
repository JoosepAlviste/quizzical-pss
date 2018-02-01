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
      <div>
        <h1 className="title">Quizzes!</h1>
        <VisibleQuizzesList />
        <Link to="/quizzes/create">Create a new Quiz</Link><br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

QuizzesPage = connect(
  null,
  { fetchQuizzes },
)(QuizzesPage);

export default QuizzesPage;
