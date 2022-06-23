import React, { Component } from 'react';
import './profile.scss';

class Profile extends Component {
  render() {
    return (
      <section className="profile section">
        <div className="content">
            <div className="profile__header">
              <h2 className="section__main-title profile__title">About Me</h2>
              <b className="icon-star_icon profile__icon"></b>
            </div>
            <div className="profile__messaging">
              <p className="profile__text">I&apos;m a freelance Frontend Engineer based in Manchester, England.</p>
              <p className="profile__text">I specialise in JavaScript application development, responsive UI and Design Systems. I draw upon over 11 years experience of working cross-functionally within agile product teams.</p>
              <p className="profile__text">I have a wealth of experience with frameworks such as Angular, React and Express which is underpinned by good design and engineering principles. Understanding the bigger pictures of scalability, modularity, testability and performance is my way of helping the team deliver maintainable systems and usable features.</p>                            
              <p className="profile__text">Producing progressive web apps that harness new technologies to deliver great customer experiences is my main motivation and a challenge that I relish.</p>
              <p className="profile__text">I use every project as an opportunity to learn new skills and I try to operate at the sharp edge of my expertise. I keep up to date with industry news and absorb all the best-practices I can find.</p>
              <p className="profile__text">I like to adopt a test-driven approach to development. I believe that this produces better software design and helps ship features to production faster.</p>
              <p className="profile__text">I advocate integrating my work with downstream changes regularly. Keeping batch sizes small improves development agility and lessens the pain of root cause analysis if things go wrong.</p>
              <p className="profile__text">I really enjoy what I do and I like working with others who share a committment to producing great products and customer experiences.</p>
            </div>
        </div>
      </section>
    );
  }
}

export default Profile;
