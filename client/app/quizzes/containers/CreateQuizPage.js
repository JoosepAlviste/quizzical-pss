import React from 'react';
import { Link } from 'react-router-dom';
import CreateQuizForm from './CreateQuizForm';

const CreateQuizPage = () => (
  <div className="container">
    <h1 className="title">Add a New Quiz!</h1>

    <CreateQuizForm />

    <Link to="/">Home</Link>
  </div>
);

export default CreateQuizPage;
