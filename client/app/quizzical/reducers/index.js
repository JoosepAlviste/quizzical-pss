// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from '../../counter/reducers/counter';
import quizzes from '../../quizzes/reducers';
import quizForm from '../../quizzes/reducers/quizForm';
import answerQuiz from '../../quizzes/reducers/answerQuiz';

const rootReducer = combineReducers({
  router,
  counter,
  quizzes,
  quizForm,
  answerQuiz,
});

export default rootReducer;
