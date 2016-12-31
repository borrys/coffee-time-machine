import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setName } from '../actions';
import NameSettingPanel from './NameSettingPanel';

function mapStateToProps(state) {
  return {
    name: state.user.name
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setName}, dispatch);
}

const NameSettingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameSettingPanel);

export default NameSettingContainer;
