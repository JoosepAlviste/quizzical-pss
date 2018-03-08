import React from 'react';
import RegisterForm from './RegisterForm';
import BackButton from '../../quizzical/elements/BackButton';

const RegisterPage = () => (
  <div className="page--padding-top">
    <div className="container">

      <BackButton />

      <h1 className="title has-text-centered">Register</h1>

      <RegisterForm />

    </div>
  </div>
);

export default RegisterPage;
