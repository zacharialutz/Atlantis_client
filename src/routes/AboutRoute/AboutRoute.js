import React from 'react';
import './AboutRoute.css';

import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

export default function AboutRoute() {
  return (
    <div className='About'>
      <header>
        <h1 className='txt-center'>ABOUT</h1>
      </header>
      <main>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
          non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
          quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
          vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?
        </p>
        <nav className='pageLinks center'>
          <Link to={'/'}>Back</Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
