import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';

const RegisterPage = () => (
  <div className="page--padding-top">
    <div className="container">

      <Link className="back-button" to="/">
        <i className="fa fa-arrow-left fa-3x" />
      </Link>

      <h1 className="title has-text-centered">Register</h1>

      <RegisterForm />

    </div>
  </div>
);

export default RegisterPage;
