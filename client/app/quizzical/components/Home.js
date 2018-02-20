// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styles from './Home.css';
import styles from '../quizzical-shared/shared-style.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2><br />

          <Link to="/counter">Counter</Link><br />
          <Link to="/quizzes">Quizzes</Link>
        </div>

      </div>
    );
  }
}
