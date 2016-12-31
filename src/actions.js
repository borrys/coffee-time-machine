import {DECLARE_ARRIVAL, START_COFFEE_PARTY, SET_NAME} from './actionTypes';

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
