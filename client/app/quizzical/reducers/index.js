// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import quizzes from '../../quizzes/reducers';
import quizForm from '../../quizzes/reducers/quizForm';
import answerQuiz from '../../quizzes/reducers/answerQuiz';

const rootReducer = combineReducers({
  router,
  quizzes,
  quizForm,
  answerQuiz,
});

export default rootReducer;
