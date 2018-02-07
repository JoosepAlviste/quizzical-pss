// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import * as fromQuizzes from '../reducers';

type Props = {
  quizzes: fromQuizzes.QuizzesListType,
};

const QuizzesList = (props: Props) => (
  <ul>
    {props.quizzes.map(quiz => (
      <li key={quiz.id}>
        <Link to={`/quizzes/${quiz.id}`}>
          {quiz.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default QuizzesList;
