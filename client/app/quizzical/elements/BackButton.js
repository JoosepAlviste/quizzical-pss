import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => (
  <Link className="back-button" to="/">
    <i className="fa fa-arrow-left fa-3x" />
  </Link>
);

export default BackButton;
