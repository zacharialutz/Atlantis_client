import React from 'react';
import './LandingRoute.css';

import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

export default function LandingRoute() {
  return (
    <div className='Landing'>
      <header>
        <h1 className='txt-center'>ATLANTIS</h1>
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
        <nav className='pageLinks center'>
          <Link to={'/game'}>Game</Link>
          {' - '}
          <Link to={'/about'}>About</Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
