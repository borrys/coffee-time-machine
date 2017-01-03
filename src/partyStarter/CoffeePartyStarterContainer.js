import { connect } from 'react-redux';
import { startCoffeeParty } from '../actions';
import CoffeePartyStarter from './CoffeePartyStarter';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    startParty: () => dispatch(startCoffeeParty())
  };
}

const CoffeePartyStarterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeePartyStarter);

export default CoffeePartyStarterContainer;
