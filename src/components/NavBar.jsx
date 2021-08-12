import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar bg-primary mb-3">
      <div className="container">
        <div className="navbar-brand center">
          <NavLink style={{
              color: 'white'
          }} to="/">Wiki Countries</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
