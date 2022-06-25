import React from 'react';
import { Link } from 'react-router-dom';
import './page-link.scss';

function PageLink({ text }) {
  return (
    <span className="page-link">
      <Link to="/profile">{text}</Link>
    </span>
  );
}

export default PageLink;
