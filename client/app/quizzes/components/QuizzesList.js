// @flow
import React from 'react';
import * as fromQuizzes from '../reducers';

/**
 * List of quizzes.
 *
 * @param props {{props: QuizzesListType}}
 * @returns {*}
 */
const QuizzesList = (props: { quizzes: fromQuizzes.QuizzesListType }) => (
  <ul>
    {props.quizzes.map(quiz => (
      <li key={quiz.id}>{quiz.title}</li>
    ))}
  </ul>
);

export default QuizzesList;
