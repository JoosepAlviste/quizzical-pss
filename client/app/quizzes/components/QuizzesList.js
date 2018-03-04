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
        className={`card ${styles.item}`}
        to={`/quizzes/${quiz.id}`}
      >
        <h2 className="subtitle">
          {quiz.title}
        </h2>

        <div>
          <span className={styles.normal}>by:</span>&nbsp;
          <strong className={styles.strong}>Test User</strong>
        </div>
      </Link>
    ))}
  </div>
);

export default QuizzesList;
