import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateQuizForm from './CreateQuizForm';

class CreateQuizPage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Add a New Quiz!</h1>

        <CreateQuizForm />

        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default CreateQuizPage;
