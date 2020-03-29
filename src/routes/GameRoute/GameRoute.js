import React from 'react';
import './GameRoute.css';

import Entity from '../../components/Entity/Entity';
import Nav from '../../components/Nav/Nav';

export default class GameRoute extends React.Component {
  state = {
    inspect: false
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='Game'>
        <Nav />
        <Entity
          x={100}
          y={100}
          size={1}
        />
      </div>
    );
  }
}
