import { connect } from 'react-redux';
import QuizForm from '../components/QuizForm';
import {
  addAnswer, addQuestion, submitCreateQuizForm, toggleAnswerCorrect, updateAnswerText, updateQuestionText,
  updateQuizTitle,
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

  onQuestionTextChanged(tempId, text) {
    dispatch(updateQuestionText(tempId, text));
  },

  onAnswerAdded(questionTempId) {
    dispatch(addAnswer(questionTempId));
  },

  onAnswerTextChanged(tempId, text) {
    dispatch(updateAnswerText(tempId, text));
  },

  onAnswerCorrectToggled(tempId, questionTempId) {
    dispatch(toggleAnswerCorrect(tempId, questionTempId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);
