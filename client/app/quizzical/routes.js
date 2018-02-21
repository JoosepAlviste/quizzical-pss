/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from '../counter/containers/CounterPage';
import QuizzesPage from '../quizzes/containers/QuizzesPage';
import CreateQuizPage from '../quizzes/containers/CreateQuizPage';
import AnswerQuizPage from '../quizzes/containers/AnswerQuizPage';
import UserRegistration from '../quizzes/User/UserRegistration';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/quizzes/create" component={CreateQuizPage} />
      <Route path="/quizzes/:quizId" component={AnswerQuizPage} />
      <Route path="/quizzes" component={QuizzesPage} />
      <Route path="/reg" component={UserRegistration} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
