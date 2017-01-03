import moment from 'moment';
import { connect } from 'react-redux';
import CoffeePartyNotification from './CoffeePartyNotification';

const MINUTE = 60 * 1000;
const MAX_NOTIFICATION_TIME = 5;

function mapStateToProps(state) {
  const time = moment(state.now).diff(moment(state.coffeeTime));
  const visible = time < MAX_NOTIFICATION_TIME * MINUTE;
  return {
    time,
    visible
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const CoffeePartyNotificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeePartyNotification);

export default CoffeePartyNotificationContainer;
