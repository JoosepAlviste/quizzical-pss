// @flow
import React from 'react';
import * as fromQuizzes from '../reducers';

type Props = {
  quizzes: fromQuizzes.QuizzesListType,
};

const QuizzesList = (props: Props) => (
  <ul>
    {props.quizzes.map(quiz => (
      <li key={quiz.id}>{quiz.title}</li>
    ))}
  </ul>
);

export default QuizzesList;
