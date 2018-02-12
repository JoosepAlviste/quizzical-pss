// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import * as fromQuizzes from '../reducers';

import styles from './QuizzesList.scss';

type Props = {
  quizzes: fromQuizzes.QuizzesListType,
};

const QuizzesList = (props: Props) => (
  <div className={styles.quizzesList}>
    {props.quizzes.map(quiz => (
      <Link
        key={quiz.id}
        className={styles.quizzesListItem}
        to={`/quizzes/${quiz.id}`}
      >
        {quiz.title}
      </Link>
    ))}
  </div>
);

export default QuizzesList;
