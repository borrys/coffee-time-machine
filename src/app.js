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
import { tick } from './actions.js';

const arrivals = [
  {name: 'John', arrival: moment().add(5, 'minutes').valueOf()},
  {name: 'Marry', arrival: moment().add(10, 'minutes').valueOf()},
  {name: 'Jane', arrival: moment().add(2, 'minutes').valueOf()},
  {name: 'George', arrival: moment().add(36, 'minutes').valueOf()}
];
const user = {
  name: localStorage.username
};

const store = createStore(coffeeTimeMachine, { arrivals, user }, applyMiddleware(thunk)); 

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
