import {DECLARE_ARRIVAL, START_COFFEE_PARTY, SET_NAME, TICK} from './actionTypes';
import moment from 'moment';

export function declareArrival(name, time) {
  return {
    type: DECLARE_ARRIVAL,
    name,
    time
  };
}

export function startCoffeeParty() {
  return {
    type: START_COFFEE_PARTY
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
