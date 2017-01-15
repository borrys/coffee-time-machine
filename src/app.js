import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
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

const user = {
  name: localStorage.username
};

const store = createStore(coffeeTimeMachine, { user }, applyMiddleware(thunk)); 

backend.onArrivalsChange(() => store.dispatch(updateArrivals()));
backend.onCoffeeTimeChange(() => store.dispatch(updateCoffeeTime()));

store.dispatch(updateArrivals());
store.dispatch(updateCoffeeTime());
store.dispatch(tick());

render(
  <Provider store={store}>
    <div>
      <TimeTableContainer />
      <NameSettingContainer />
      <ArrivalDeclarationContainer />
      <CoffeePartyNotificationContainer />
      <CoffeePartyStarterContainer />
    </div>
  </Provider>,
  document.getElementById('app')
);
