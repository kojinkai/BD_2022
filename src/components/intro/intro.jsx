import React, { Component } from 'react';
import PageLink from '../page-link/page-link';
import logo from './boxdeluxe_logo.svg';
import './intro.scss';

class Intro extends Component {
  render() {
    return (
    <section className="section intro">
        <div className="content">
            <div className="intro__brand">
                <img className="intro__logo" src={logo} alt="box deluxe logo" />
                <b className="icon-star_icon intro__icon"></b>
            </div>
            <div className="intro__messaging">
              <p className="intro__text">
                  Hi, I’m Lewis Nixon, a Front End engineer and product developer.
                  <br />  
                  This is where you can find out more about what I do.
              </p>
              <p className="intro__text">
                  I believe that coding is a craft and true practitioners place a high premium on creating performant, scalable, standards-based code and snappy, intuitive interfaces.
              </p>
            </div>
            <PageLink text="Read more of my profile" />
        </div>
    </section>
    );
  }
}

export default Intro;
