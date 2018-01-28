// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from '../../counter/reducers/counter';
import quizzes from '../../quizzes/reducers';

const rootReducer = combineReducers({
  router,
  counter,
  quizzes,
});

export default rootReducer;
