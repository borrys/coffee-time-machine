import { connect } from 'react-redux';
import moment from 'moment';
import ArrivalDeclarationPanel from './ArrivalDeclarationPanel';
import { declareArrival } from '../actions';

function mapStateToProps(state) {
  return {
    name: state.user.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    declareArrival: function (name, minutes) {
      const arrivalTime = moment().add(minutes, 'minutes').valueOf();
      const action = declareArrival(name, arrivalTime); 
      dispatch(action);
    }
  };
};

const ArrivalDeclarationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArrivalDeclarationPanel);

export default ArrivalDeclarationContainer;
