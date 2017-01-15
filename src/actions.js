import {UPDATE_ARRIVALS, START_COFFEE_PARTY, UPDATE_COFFEE_TIME, DISMISS_COFFEE_NOTIFICATION, SET_NAME, TICK} from './actionTypes';
import backend from './backend/BackendService';

export function declareArrival(time) {
  return (dispatch, getState) => {
    const name = getState().user.name;
    backend.addArrival(name, time);
  };
}

function convertBackendArrivals({arrivals}) {
  return arrivals.map(a => {
    return {name: a.name, arrival: a.time};
  });
}

export function updateArrivals() {
  return (dispatch, getState) => {
    backend.getArrivals()
      .then(convertBackendArrivals)
      .then(arrivals => dispatch({type: UPDATE_ARRIVALS, arrivals}));
  };
}

export function startCoffeeParty() {
  return (dispatch, getState) => {
    backend.setCoffeeTime(getState().now);
  };
}

export function updateCoffeeTime() {
  return (dispatch, getState) => {
    backend.getCoffeeTime()
      .then(res => dispatch({type: UPDATE_COFFEE_TIME, time: res.time}));
  };
}

export function dismissCoffeeNotification() {
  return {
    type: DISMISS_COFFEE_NOTIFICATION
  };
}

export function setName(name) {
  return {
    type: SET_NAME,
    name
  };
}

export function tick() {
  return (dispatch, getState) => {
    setInterval(() => dispatch({ type: TICK }), 1000);
  }
}
