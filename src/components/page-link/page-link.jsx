import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './page-link.scss';

class Button extends Component {
  render() {
    return (
      <span className="page-link">
        <Link to="/profile">{this.props.text}</Link>
      </span>
    );
  }
}

export default Button;
