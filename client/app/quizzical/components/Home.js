// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styles from './Home.css';
import styles from '../quizzical-shared/shared-style.css';
import Image from './1.jpg'

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2 style={{textAlign:'center', fontWeight:'bolder'}}>Take a Journey</h2><br />

          {/* <Link to="/counter">Counter</Link><br /> */}
          <Link to="/quizzes"> <img src={Image}/></Link>
          {/* <Link to="/reg">Registration</Link> */}

          <h2 style={{textAlign:'center',fontStyle:'italic'}}>Rights to Platform spanning course </h2><br />
          <h2 style={{textAlign:'center',fontStyle:'italic'}}>2018  Johan Sinder</h2><br />
          <p style={{textAlign:'center',fontStyle:'italic' ,fontSize:'10px'}}>Image From https://portal.somersfield.bm/Regan/images/quiz1.jpg</p><br />
        </div>

      </div>
    );
  }
}
