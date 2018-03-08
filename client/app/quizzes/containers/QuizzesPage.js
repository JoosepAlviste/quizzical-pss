import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import VisibleQuizzesList from '../containers/VisibleQuizzesList';
import { fetchQuizzes } from '../actions';
import Page from '../../quizzical/elements/Page';

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
      <Page title="Quizzes" showBackButton={false}>
        <VisibleQuizzesList />

        <div className="has-text-centered">
          <Link
            className="button is-primary button--main-action"
            to="/quizzes/create"
          >
            Create new
          </Link>
        </div>
      </Page>
    );
  }
}

QuizzesPage = connect(
  null,
  { fetchQuizzes },
)(QuizzesPage);

export default QuizzesPage;
