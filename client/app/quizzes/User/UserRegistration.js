import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../quizzical/quizzical-shared/shared-style.css';
import { Link } from 'react-router-dom';

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.emailChanged = this.emailChanged.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
  }

  nameChanged(e) {
    this.setState({ name: e.target.value });
  }

  emailChanged(e) {
    this.setState({ email: e.target.value });
  }

  passwordChanged(e) {
    this.setState({ password: e.target.value });
  }

  onSubmitted(e) {
    e.preventDefault();

    const {
      name,
      email,
      password,
    } = this.state;
  }

  render() {
    const {
      name,
      email,
      password,
    } = this.state;

    return (
    
      <form onSubmit={this.onSubmitted} className={styles.form}>
        <div className={styles.container}>
      <Link className="back-button" to="/">
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
      </div>
Name
        <input
          label="Name"
          name="name"
          value={name}
          onChange={this.nameChanged}
        />
Email
        <input
          label="Email"
          name="email"
          value={email}
          onChange={this.emailChanged}
        />
Password
        <input
          label="Password"
          name="password"
          value={password}
          type="password"
          onChange={this.passwordChanged}
        />
Submit
        <button
          label="Password"
          name="password"
          value={password}
          type="password"
          onChange={this.passwordChanged}
        />
      </form>
    );
  }
}

export default UserRegistration;
