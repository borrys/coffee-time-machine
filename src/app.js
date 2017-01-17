import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import moment from 'moment';
import coffeeTimeMachine from './reducers';

import TimeTableContainer from './timeTable/TimeTableContainer';
import ArrivalDeclarationContainer from './arrivalDeclaration/ArrivalDeclarationContainer';
import NameSettingContainer from './nameSetting/NameSettingContainer';
import CoffeePartyNotificationContainer from './coffeeParty/CoffeePartyNotificationContainer';
import CoffeePartyStarterContainer from './partyStarter/CoffeePartyStarterContainer';
import { tick, updateArrivals, updateCoffeeTime } from './actions.js';
import backend from './backend/BackendService';
import Layout from './pages/Layout';

const user = {
  name: localStorage.username
};

const store = createStore(coffeeTimeMachine, { user }, applyMiddleware(thunk)); 

backend.onArrivalsChange(() => store.dispatch(updateArrivals()));
backend.onCoffeeTimeChange(() => store.dispatch(updateCoffeeTime()));

store.dispatch(updateArrivals());
store.dispatch(updateCoffeeTime());
store.dispatch(tick());

const MainPage = () => {
  return <div>
    <TimeTableContainer />
    <ArrivalDeclarationContainer />
    <CoffeePartyNotificationContainer />
    <CoffeePartyStarterContainer />
  </div>;
};

const SettingsPage = () => {
  return <NameSettingContainer />;
};

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout} >
        <IndexRoute component={MainPage} />
        <Route path="settings" component={SettingsPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
