import React from 'react';
import GameContext from '../../contexts/GameContext/GameContext';
import './GameRoute.css';

import Game from '../../components/Game/Game';
import Inspector from '../../components/Inspector/Inspector';
import Nav from '../../components/Nav/Nav';

export default class GameRoute extends React.Component {
  state = {
    hover: null,
    focus: null // selected entity
  }

  inspectSelect = (data) => {
    this.setState({ focus: data });
  }
  inspectClose = () => {
    this.setState({ focus: null });
  }
  inspectHoverOn = (name) => {
    this.setState({ hover: name });
  }
  inspectHoverOff = () => {
    this.setState({ hover: null });
  }

  render() {
    const state = this.state;
    console.log(state);

    const ctx = {
      hover: state.hover,
      focus: state.focus,
      inspectSelect: this.inspectSelect,
      inspectClose: this.inspectClose,
      inspectHoverOn: this.inspectHoverOn,
      inspectHoverOff: this.inspectHoverOff
    }

    return (
      <div className='GameRoute'>
        <GameContext.Provider value={ctx}>
          <Nav />
          <Inspector
            inspect={state.inspect}
            focus={state.focus}
            close={this.inspectClose}
          />
          <Game />
        </GameContext.Provider>
      </div>
    );
  }
}
