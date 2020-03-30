import React from 'react';
import './Inspector.css';

export default function Inspector(props) {
  return (
    <div className='Inspector'>
      <div className='InspectorHeader'>
        <h2>{props.hover}</h2>
      </div>
      {props.inspect &&
        <section className='InspectorBody'>
          <button className='btn btn-close' onClick={() => props.close()}>X</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>}
    </div>
  );
}
