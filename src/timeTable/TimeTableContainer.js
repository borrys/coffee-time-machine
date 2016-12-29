import { connect } from 'react-redux';
import TimeTable from './TimeTable';

import './timeTable.scss'

function mapStateToProps(state) {
  return {
    users: state.arrivals
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const VisibleTimeTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeTable);

export default VisibleTimeTable;
