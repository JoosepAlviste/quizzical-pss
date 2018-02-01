/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from '../counter/containers/CounterPage';
import QuizzesPage from '../quizzes/containers/QuizzesPage';
import AddQuizPage from '../quizzes/containers/AddQuizPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/quizzes" component={QuizzesPage} />
      <Route path="/AddQuiz" component={AddQuizPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
