import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './masthead.scss';

class Masthead extends Component {
  render() {
    return (
      <nav className="masthead">
        <div className="container">
            <ul className="masthead__navigation" role="navigation">
              <li className="masthead__item">
                <Link to="/intro" className={`masthead__link ${this.props.activeroute === 'intro' ? 'active' : ''}`}>Intro</Link>
              </li>
              <li className="masthead__item">
                <Link to="/skills" className={`masthead__link ${this.props.activeroute === 'skills' ? 'active' : ''}`}>Skills</Link>
              </li>                  
              <li className="masthead__item">
                <Link to="/profile" className={`masthead__link ${this.props.activeroute === 'profile' ? 'active' : ''}`}>Profile</Link>
              </li>
              <li className="masthead__item"> 
                <Link to="/contact" className={`masthead__link ${this.props.activeroute === 'contact' ? 'active' : ''}`}>Contact</Link>
              </li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default Masthead;
