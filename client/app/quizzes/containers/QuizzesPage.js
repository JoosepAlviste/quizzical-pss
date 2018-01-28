import React from 'react';
import { Link } from 'react-router-dom';
import VisibleQuizzesList from '../containers/VisibleQuizzesList';

const QuizzesPage = () => (
  <div>
    <h1 className="title">Quizzes!</h1>
    <VisibleQuizzesList />
    <Link to="/">Home</Link>
  </div>
);

export default QuizzesPage;
