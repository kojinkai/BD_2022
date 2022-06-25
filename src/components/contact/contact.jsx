import React from 'react';
import logo from '../../assets/boxdeluxe_footer.svg';
import './contact.scss';

function Contact() {
  const contactMethods = [
    {
      title: 'flickr',
      className: 'icon-flickr_icon',
      url: 'http://www.flickr.com/photos/boxdeluxe/',
      id: 1
    },
    {
      title: 'github',
      className: 'icon-github_icon',
      url: 'https://github.com/kojinkai',
      id: 3
    },
    {
      title: 'linkedin',
      className: 'icon-linkedin_icon',
      url: 'http://www.linkedin.com/in/lewisnixon',
      id: 4
    }
  ]

  const contactLinks = contactMethods.map(item => 
    <li className="contact__media-item" key={item.id}>
      <a href={item.url} title={item.title}>
        <b className={item.className + ' contact__item-link'}></b>
      </a>
    </li>
  );

  return (
    <section className="section contact">
      <div className="contact__container">
        <ul className="contact__media-list">
          {contactLinks}
        </ul>
      </div>
      <footer className="contact__footer">
        <div>
          <img className="contact__footer-message" src={logo} alt="thanks for stopping by" />
        </div>
      </footer>        
    </section>
  );
}

export default Contact;
