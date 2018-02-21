// @flow
import React, { Component } from 'react';
import TextField from '../../quizzical/elements/TextField';
import Button from '../../quizzical/elements/Button';
import { register } from '../api';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.onNameChanged = this.onNameChanged.bind(this);
    this.onEmailChanged = this.onEmailChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onSubmitted = this.onSubmitted.bind(this);
  }

  onNameChanged(e) {
    this.setState({ name: e.target.value });
  }

  onEmailChanged(e) {
    this.setState({ email: e.target.value });
  }

  onPasswordChanged(e) {
    this.setState({ password: e.target.value });
  }

  onSubmitted(e) {
    e.preventDefault();

    const {
      name,
      email,
      password,
    } = this.state;

    register({ name, email, password });
  }

  render() {
    const {
      name,
      email,
      password,
    } = this.state;

    return (
      <form onSubmit={this.onSubmitted}>
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={this.onNameChanged}
        />

        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={this.onEmailChanged}
        />

        <TextField
          label="Password"
          name="password"
          value={password}
          type="password"
          onChange={this.onPasswordChanged}
        />

        <Button
          type="info"
          buttonType="submit"
        >
          Register
        </Button>
      </form>
    );
  }
}

export default RegisterForm;
