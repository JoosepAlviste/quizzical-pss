// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuizForm from '../components/QuizForm';
import {
  addChoice, addQuestion, submitCreateQuizForm, toggleChoiceCorrect, updateChoiceText,
  updateQuestionText, updateQuizTitle,
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
    return dispatch(submitCreateQuizForm());
  },

  onQuestionAdded() {
    return dispatch(addQuestion());
  },

  onQuestionTextChanged(tempId, text) {
    dispatch(updateQuestionText(tempId, text));
  },

  onChoiceAdded(questionTempId) {
    dispatch(addChoice(questionTempId));
  },

  onChoiceTextChanged(tempId, text) {
    dispatch(updateChoiceText(tempId, text));
  },

  onChoiceCorrectToggled(tempId, questionTempId) {
    dispatch(toggleChoiceCorrect(tempId, questionTempId));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizForm));
