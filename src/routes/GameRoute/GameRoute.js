import React from 'react';
import InspectorCtx from '../../contexts/InspectorCtx/InspectorCtx';
import './GameRoute.css';

import Game from '../../components/Game/Game';
import Inspector from '../../components/Inspector/Inspector';
import Nav from '../../components/Nav/Nav';

export default class GameRoute extends React.Component {
  state = {
    inspect: false,
    hover: null,
    focus: null // selected entity
  }

  inspectSelect = () => {
    this.setState({ inspect: true });
  }
  inspectClose = () => {
    this.setState({ inspect: false });
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

    const ctxInspector = {
      inspect: state.inspect,
      hover: state.hover,
      focus: state.focus,
      inspectSelect: this.inspectSelect,
      inspectClose: this.inspectClose,
      inspectHoverOn: this.inspectHoverOn,
      inspectHoverOff: this.inspectHoverOff
    }

    return (
      <div className='GameRoute'>
        <Nav />
        <InspectorCtx.Provider value={ctxInspector}>
          <Inspector
            inspect={state.inspect}
            focus={state.focus}
            close={this.inspectClose}
          />
        </InspectorCtx.Provider>
        <Game />
      </div>
    );
  }
}
