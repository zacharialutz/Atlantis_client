import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='Nav'>
      <div className='pageLinks center'>
        <Link to={'/'}>Main Menu</Link>
        {' - '}
        <Link to={'/about'}>About</Link>
      </div>
    </nav>
  );
}
