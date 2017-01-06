import {DECLARE_ARRIVAL, START_COFFEE_PARTY, DISMISS_COFFEE_NOTIFICATION, SET_NAME, TICK} from './actionTypes';

export function declareArrival(time) {
  return (dispatch, getState) => {
    const name = getState().user.name;
    dispatch({ type: DECLARE_ARRIVAL, name, time }); 
  };
}

export function startCoffeeParty() {
  return {
    type: START_COFFEE_PARTY
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
