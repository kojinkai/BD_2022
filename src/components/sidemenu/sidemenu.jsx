import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuToggle from '../menu-toggle/menu-toggle';
import './sidemenu.scss';

function Sidemenu({ backgroundColor, children }) {
  const [sidemenuIsOpen, setSidemenuIsOpen] = useState(false);

  const handleSidemenuToggle = () => {
    setSidemenuIsOpen(!sidemenuIsOpen);
  }

  let viewPanelProps = {
    className: 'sidemenu__view',
    style: {
      transform: 'translateX(0%)',
      WebkitTransform: 'translateX(0%)'
    }
  }

  if (sidemenuIsOpen) {
    viewPanelProps = Object.assign(viewPanelProps, {
      style: {
        transform: 'translateX(80%)',
        WebkitTransform: 'translateX(80%)'
      },
      onClick: handleSidemenuToggle
    });
  }

  return (
    <div className="sidemenu">
      <nav className="sidemenu__nav">
        <ul className="sidemenu__list" role="navigation">
          <li className="sidemenu__item">
            <Link to="/intro" onClick={handleSidemenuToggle}>
              Intro
              <b className="sidemenu__icon icon-quotes-left"></b>
            </Link>
          </li>
          <li className="sidemenu__item">
            <Link to="/skills" onClick={handleSidemenuToggle}>
              Skills
              <b className="sidemenu__icon icon-magic-wand"></b>                
            </Link>
          </li>                  
          <li className="sidemenu__item">
            <Link to="/profile" onClick={handleSidemenuToggle}>
              Profile
              <b className="sidemenu__icon icon-profile"></b> 
            </Link>
          </li>
          <li className="sidemenu__item">   
            <Link to="/contact" onClick={handleSidemenuToggle}>
              Contact
              <b className="sidemenu__icon icon-phone"></b>                
            </Link>
          </li>
        </ul>
      </nav>
      <div {...viewPanelProps}>
        <MenuToggle 
          toggle={handleSidemenuToggle} 
          active={sidemenuIsOpen}
          color={backgroundColor}
        />
        {children}
      </div>
    </div>
  );
}

export default Sidemenu;
