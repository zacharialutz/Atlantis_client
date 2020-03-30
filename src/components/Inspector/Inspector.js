import React from 'react';
import GameContext from '../../contexts/GameContext/GameContext';
import './Inspector.css';

export default class Inspector extends React.Component {
  static contextType = GameContext;

  render() {
    const ctx = this.context;
    const data = ctx.focus;

    return (
      <div className='Inspector'>
        <div className='InspectorHeader'>
          <h3>{ctx.hover}</h3>
        </div>
        {data &&
          <section className='InspectorBody'>
            <h3>{data.name}</h3>
            <button className='btn btn-close' onClick={() => ctx.inspectClose()}>X</button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>}
      </div>
    );
  }
}
