import React from 'react';
import './menu-toggle.scss';

function MenuToggle({ active, color, toggle}) {
  const classList = [
    'menu-toggle__icon'
  ];

  if (active) {
    classList.push('active');
  }

  return (
    <div className="menu-toggle" style={{background: color}}>
      <button className="menu-toggle__button" onClick={toggle}>
        <span className={classList.join(' ')}></span>
      </button>
    </div>
  );
}

export default MenuToggle;
