import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';

export default function App(props) {
  return (
    <nav className='Nav'>
      <div className='pageLinks center'>
        <Link to={'/'}>Main Menu</Link>
        {' - '}
        <Link to={'/about'}>About</Link>
        {' - '}
        <span onClick={props.inspectToggle} className='btn'>?</span>
      </div>
    </nav>
  );
}
