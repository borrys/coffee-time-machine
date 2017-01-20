import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Settings from './Settings';

export default class Routing extends React.Component {
  render() {
    return <Router history={hashHistory}>
      <Route path="/" component={Layout} >
        <IndexRoute component={Dashboard} />
        <Route path="settings" component={Settings} />
      </Route>
    </Router>;
  }
}
