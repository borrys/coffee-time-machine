import moment from 'moment';
import { connect } from 'react-redux';
import CoffeePartyNotification from './CoffeePartyNotification';
import { dismissCoffeeNotification } from '../actions.js';


const MINUTE = 60 * 1000;
const MAX_NOTIFICATION_TIME = 5;

function mapStateToProps(state) {
  const time = moment(state.now).diff(moment(state.coffee.time));
  const outdated = time > MAX_NOTIFICATION_TIME * MINUTE;
  const visible = !outdated && state.coffee.notification;
  return {
    time,
    visible
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dismiss: () => dispatch(dismissCoffeeNotification())
  };
}

const CoffeePartyNotificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeePartyNotification);

export default CoffeePartyNotificationContainer;
