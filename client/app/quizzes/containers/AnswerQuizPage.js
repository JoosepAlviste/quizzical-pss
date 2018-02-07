import { connect } from 'react-redux';
import AnswerQuiz from '../components/AnswerQuiz';
import { fetchQuiz } from '../actions';

const mapStateToProps = (state) => ({
  router: state.router,
  quiz: state.answerQuiz,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuiz(id) {
    dispatch(fetchQuiz(id));
  },
});

const AnswerQuizPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerQuiz);

export default AnswerQuizPage;
