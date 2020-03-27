import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import AboutRoute from '../../routes/AboutRoute/AboutRoute';
import GameRoute from '../../routes/GameRoute/GameRoute';
import LandingRoute from '../../routes/LandingRoute/LandingRoute';

export default class App extends React.Component {
  state = {
    user: null,
    error: null
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path={'/'} component={LandingRoute} />
          <Route path={'/about'} component={AboutRoute} />
          <Route path={'game'} component={GameRoute} />
        </Switch>
      </div>
    );
  }
}
