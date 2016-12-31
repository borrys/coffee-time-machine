import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import moment from 'moment';
import coffeeTimeMachine from './reducers';

import TimeTableContainer from './timeTable/TimeTableContainer';
import ArrivalDeclarationContainer from './arrivalDeclaration/ArrivalDeclarationContainer';
import NameSettingContainer from './nameSetting/NameSettingContainer';

const arrivals = [
  {name: 'John', arrival: moment().add(5, 'minutes').valueOf()},
  {name: 'Marry', arrival: moment().add(10, 'minutes').valueOf()},
  {name: 'Jane', arrival: moment().add(2, 'minutes').valueOf()},
  {name: 'George', arrival: moment().add(36, 'minutes').valueOf()}
];

const store = createStore(coffeeTimeMachine, {
  arrivals,
  user: {},
  coffeeTime: -1
});

render(
  <Provider store={store}>
    <div>
      <TimeTableContainer />
      <ArrivalDeclarationContainer />
      <NameSettingContainer />
    </div>
  </Provider>,
  document.getElementById('app')
);
