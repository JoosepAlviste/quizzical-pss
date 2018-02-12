import React from 'react';
import { Link } from 'react-router-dom';
import CreateQuizForm from './CreateQuizForm';

const CreateQuizPage = () => (
  <div className="page--padding-top">
    <div className="container">
      <h1 className="title">Add a New Quiz!</h1>

      <CreateQuizForm />

      <Link className="button is-text" to="/">Home</Link>
    </div>
  </div>
);

export default CreateQuizPage;
