import React from 'react';
import './Game.css';

import Entity from '../../components/Entity/Entity';

export default class Game extends React.Component {


  render() {
    return (
      <div className='Game'>
        <Entity
          x={100}
          y={100}
          size={1}
        />
      </div>
    );
  }
}
