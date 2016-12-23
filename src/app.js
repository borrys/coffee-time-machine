import './stylesheets/application.scss'
import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import coffeeTimeMachine from './reducers';
import VisibleTimeTable from './containers/VisibleTimeTable';

const arrivals = [
  {name: 'John', arrival: moment().add(5, 'minutes').valueOf()},
  {name: 'Marry', arrival: moment().add(10, 'minutes').valueOf()},
  {name: 'Jane', arrival: moment().add(2, 'minutes').valueOf()},
  {name: 'George', arrival: moment().add(36, 'minutes').valueOf()}
];

const store = createStore(coffeeTimeMachine, {
  arrivals,
  coffeeTime: -1
});

render(
  <Provider store={store}>
    <VisibleTimeTable />
  </Provider>,
  document.getElementById('app')
);
