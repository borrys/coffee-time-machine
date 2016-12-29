import { connect } from 'react-redux';
import moment from 'moment';
import ArrivalDeclarationPanel from './ArrivalDeclarationPanel';
import { declareArrival } from '../actions';
import style from './style.scss';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    declareArrival: function (minutes) {
      const arrivalTime = moment().add(minutes, 'minutes').valueOf();
      const action = declareArrival('unnamed', arrivalTime); 
      dispatch(action);
    }
  };
};

const ArrivalDeclarationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArrivalDeclarationPanel);

export default ArrivalDeclarationContainer;
