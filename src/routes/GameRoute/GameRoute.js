import React from 'react';
import './GameRoute.css';

import Game from '../../components/Game/Game';
import Nav from '../../components/Nav/Nav';

export default class GameRoute extends React.Component {
  state = {
    inspect: false
  }

  inspectToggle = () => {
    const cursor = this.state.inspect ? 'default' : 'help';
    document.documentElement.style.setProperty('--cursor', cursor);

    const flip = !this.state.inspect;
    this.setState({ inspect: flip});
  }

  render() {
    console.log(this.state.inspect);
    return (
      <div className='GameRoute'>
        <Nav inspectToggle={this.inspectToggle} />
        <Game />
      </div>
    );
  }
}
