import React from 'react';
import { Switch, NativeRouter, Route } from 'react-router-native';

import Login from './Login';
import Main from './Main';

export default () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/query" component={Main} />
    </Switch>
  </NativeRouter>
);
