import {combineReducers} from 'redux';
import moment from 'moment';
import {DECLARE_ARRIVAL, START_COFFEE_PARTY, SET_NAME, TICK} from './actionTypes';

const initialState = {
  arrivals: []
};

function arrivals(state = [], action) {
  switch (action.type) {
    case DECLARE_ARRIVAL:
      const filtered = state.filter(x => x.name != action.name);
      return [
        ...filtered,
        {name: action.name, arrival: action.time}
      ];
    default:
      return state;
  }
}

function coffeeTime(state = -1, action) {
  switch (action.type) {
    case START_COFFEE_PARTY:
      return moment().valueOf();
    default:
      return state;
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case SET_NAME:
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
  coffeeTime,
  user,
  now
});

export default coffeeTimeMachine;
