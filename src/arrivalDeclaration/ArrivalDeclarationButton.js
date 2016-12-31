import React from 'react';

class ArrivalDeclarationButton extends React.Component {
  render() {
    const {declareArrival, time, name} = this.props;
    function doDeclare() {
      declareArrival(name, time);
    }

    return <button onClick={doDeclare}>
      {this.props.time} min
    </button>;
  }
}

export default ArrivalDeclarationButton;
