import React from 'react';
import './GameRoute.css';

import Game from '../../components/Game/Game';
import Inspector from '../../components/Inspector/Inspector';
import Nav from '../../components/Nav/Nav';

export default class GameRoute extends React.Component {
  state = {
    inspect: false
  }

  inspectToggle = () => {
    const flip = !this.state.inspect;
    this.setState({ inspect: flip});
  }

  render() {
    return (
      <div className='GameRoute'>
        <Nav />
        <Inspector inspect={this.state.inspect} />
        <Game />
      </div>
    );
  }
}
