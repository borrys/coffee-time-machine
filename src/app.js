import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import coffeeTimeMachine from './reducers';
import { tick, updateArrivals, updateCoffeeTime } from './actions.js';
import backend from './backend/BackendService';
import Routing from './pages/Routing';

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
  <Provider store={store}><Routing /></Provider>,
  document.getElementById('app')
);
