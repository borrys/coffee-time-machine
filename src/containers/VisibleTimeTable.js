import { connect } from 'react-redux';
import TimeTable from '../components/TimeTable';

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
