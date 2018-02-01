import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddQuizPage extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Add New Quiz!</h1>
        <h1>Placeholders:</h1>
        <span> 
          Category: <br />
          Question: <br />
          Answers: <br />
          Correct answer: <br />
        </span>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default AddQuizPage;
