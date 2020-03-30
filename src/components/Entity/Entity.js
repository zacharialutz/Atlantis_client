import React from 'react';
import GameContext from '../../contexts/GameContext/GameContext';
import './Entity.css';

export default class Entity extends React.Component {
  static defaultProps = {
    name: null,
    size: 1, // number of tiles wide (all entities are square for now)
    x: 0,
    y: 0,
    hp: 100,

    flags: {
      selectable: false,
      solid: false
    },
    inventory: {},
    status: {
      onFire: false
    }
  }

  static contextType = GameContext;

  render() {
    const ctx = this.context;
    const selectable = this.props.flags.selectable;
    const selectableClass = selectable ? ' selectable' : '';

    return (
      <div
        className={`Entity${selectableClass}`}
        onClick={() => { if (selectable) ctx.inspectSelect(this.props) }}
        onMouseEnter={() => ctx.inspectHoverOn(this.props.name)}
        onMouseLeave={() => ctx.inspectHoverOff()}
      >

      </div>
    );
  }
}
