import React from 'react';
import './Entity.css';

export default class Entity extends React.Component {
  constructor(props) {
    super(props);

    this.size = props.size // number of tiles wide (all entities are square for now)

    this.state = {
      x: props.x,
      y: props.y,
      hp: 100,
    }
  }

  render() {
    return (
      <div className='Entity'>
        <span>{this.state.x}</span>
      </div>
    );
  }
}
