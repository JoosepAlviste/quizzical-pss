import { connect } from 'react-redux';
import QuizForm from '../components/QuizForm';
import { submitCreateQuizForm, updateQuizTitle } from '../actions/quizForm';

const mapStateToProps = (state) => ({
  title: state.quizForm.title,
});

const mapDispatchToProps = (dispatch) => ({
  onTitleChanged(title) {
    dispatch(updateQuizTitle(title));
  },

  onSubmitted() {
    dispatch(submitCreateQuizForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);
