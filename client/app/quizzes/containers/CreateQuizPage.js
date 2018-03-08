import React from 'react';
import CreateQuizForm from './CreateQuizForm';
import BackButton from '../../quizzical/elements/BackButton';

const CreateQuizPage = () => (
  <div className="page--padding-top">
    <div className="container">
      <BackButton />

      <h1 className="title has-text-centered">Add a New Quiz!</h1>

      <CreateQuizForm />
    </div>
  </div>
);

export default CreateQuizPage;
