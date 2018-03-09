// @flow
import { connect } from 'react-redux';
import QuizzesList from '../components/QuizzesList';

const mapStateToProps = (state) => ({
  quizzes: state.quizzes,
});

export default connect(mapStateToProps, null)(QuizzesList);
