import { connect } from 'react-redux';
import TimeTable from './TimeTable';

function mapStateToProps(state) {
  return {
    users: state.arrivals,
    now: state.now
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
