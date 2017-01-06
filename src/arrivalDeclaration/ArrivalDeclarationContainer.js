import { connect } from 'react-redux';
import moment from 'moment';
import ArrivalDeclarationPanel from './ArrivalDeclarationPanel';
import { declareArrival } from '../actions';

function mapStateToProps(state) {
  return {
    visible: !!state.user.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    declareArrival(minutes) {
      const arrivalTime = moment().add(minutes, 'minutes').valueOf();
      const action = declareArrival(arrivalTime); 
      dispatch(action);
    }
  };
};

const ArrivalDeclarationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArrivalDeclarationPanel);

export default ArrivalDeclarationContainer;
