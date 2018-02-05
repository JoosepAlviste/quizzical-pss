import { connect } from 'react-redux';
import QuizForm from '../components/QuizForm';
import {
  addQuestion, submitCreateQuizForm, updateQuestionText, updateQuizTitle,
} from '../actions/quizForm';

const mapStateToProps = (state) => ({
  title: state.quizForm.title,
  questions: state.quizForm.questions,
});

const mapDispatchToProps = (dispatch) => ({
  onTitleChanged(title) {
    dispatch(updateQuizTitle(title));
  },

  onSubmitted() {
    dispatch(submitCreateQuizForm());
  },

  onQuestionAdded() {
    dispatch(addQuestion());
  },

  onQuestionTextChanged(index, text) {
    dispatch(updateQuestionText(index, text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);
