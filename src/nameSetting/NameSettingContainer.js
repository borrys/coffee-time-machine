import { connect } from 'react-redux';
import NameSettingPanel from './NameSettingPanel';

function mapStateToProps(state) {
  return {
    name: state.user.name
  };
}

function mapDispatchToProps(dispatch) {
  return { };
}

const NameSettingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameSettingPanel);

export default NameSettingContainer;
