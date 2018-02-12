import React from 'react';
import { Link } from 'react-router-dom';
import CreateQuizForm from './CreateQuizForm';

const CreateQuizPage = () => (
  <div className="page--padding-top">
    <div className="container">
      <Link className="back-button" to="/quizzes">
        <i className="fa fa-arrow-left fa-3x" />
      </Link>

      <h1 className="title has-text-centered">Add a New Quiz!</h1>

      <CreateQuizForm />
    </div>
  </div>
);

export default CreateQuizPage;
