import {combineReducers} from 'redux';
import moment from 'moment';
import {DECLARE_ARRIVAL, START_COFFEE_PARTY} from './actionTypes';

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

const coffeeTimeMachine = combineReducers({
  arrivals,
  coffeeTime
});

export default coffeeTimeMachine;
