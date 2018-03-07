/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import QuizzesPage from '../quizzes/containers/QuizzesPage';
import CreateQuizPage from '../quizzes/containers/CreateQuizPage';
import AnswerQuizPage from '../quizzes/containers/AnswerQuizPage';
import RegisterPage from '../auth/components/RegisterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/register" component={RegisterPage} />
      <Route path="/quizzes/create" component={CreateQuizPage} />
      <Route path="/quizzes/:quizId" component={AnswerQuizPage} />
      <Route path="/" component={QuizzesPage} />
    </Switch>
  </App>
);
