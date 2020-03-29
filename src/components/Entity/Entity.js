import React from 'react';
import './Entity.css';

export default class Entity extends React.Component {
  constructor(props) {
    super(props);

    this.size = props.size; // number of tiles wide (all entities are square for now)
    this.flags = props.flags;

    this.state = {
      x: props.x,
      y: props.y,
      hp: 100,
    }
  }

  static defaultProps = {
    size: 1,
    flags: {
      flammable: false,
      selectable: false
    }
  }

  render() {
    const selectable = this.flags.selectable ? ' selectable' : '';

    return (
      <div className={`Entity${selectable}`}>
        
      </div>
    );
  }
}
