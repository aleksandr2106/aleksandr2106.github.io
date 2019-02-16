import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
  return (
    <header className="header">
      <Link to="/">Page One</Link>
      <Link to="/two">Page Two</Link>
      <Link to="/three">Page three</Link>
    </header>
  );
}

export default Header;
