import { connect } from 'react-redux';
import TimeTable from './TimeTable';

import './style.scss'

function mapStateToProps(state) {
  return {
    users: state.arrivals
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const TimeTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTable);

export default TimeTableContainer;
