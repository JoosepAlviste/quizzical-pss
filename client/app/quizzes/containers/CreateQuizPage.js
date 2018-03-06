import React from 'react';
import { Link } from 'react-router-dom';
import CreateQuizForm from './CreateQuizForm';
// import styles1 from '../../quizzical/quizzical-shared/shared-style.css';

const CreateQuizPage = () => (
  <div className="page--padding-top">
    <div className="container">
      <Link className="back-button" to="/quizzes">
        {/* <i className="fa fa-arrow-circle-o-left fa-3x" /> */}
        <i className="fa fa-angle-left fa-3x"  />
      </Link>
      <h1  style={{color: 'black',
    textAlign: 'center',
    fontStyle: 'inherit',
    fontSize: 'larger'}}>Add a New Quiz!</h1>

      <CreateQuizForm />
    </div>
  </div>
);

export default CreateQuizPage;
