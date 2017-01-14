import {combineReducers} from 'redux';
import moment from 'moment';
import {UPDATE_ARRIVALS, START_COFFEE_PARTY, DISMISS_COFFEE_NOTIFICATION, SET_NAME, TICK} from './actionTypes';

function arrivals(state = [], action) {
  switch (action.type) {
    case UPDATE_ARRIVALS:
      return action.arrivals;
    default:
      return state;
  }
}

function coffee(state = {}, action) {
  switch (action.type) {
    case START_COFFEE_PARTY:
      return {
        time: moment().valueOf(),
        notification: true
      };
      break;
    case DISMISS_COFFEE_NOTIFICATION:
      return Object.assign({}, state, { notification: false });
    default:
      return state;
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case SET_NAME:
      localStorage.username = action.name;
      return Object.assign({}, state, {name: action.name});
    default:
      return state;
  }
}

function now(state = moment().valueOf(), action) {
  switch (action.type) {
    case TICK:
      return moment().valueOf();
    default:
      return state;
  }
}

const coffeeTimeMachine = combineReducers({
  arrivals,
  coffee,
  user,
  now
});

export default coffeeTimeMachine;
