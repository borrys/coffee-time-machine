import React from 'react';

class ArrivalDeclarationButton extends React.Component {
  render() {
    const {declareArrival, time} = this.props;
    function doDeclare() {
      declareArrival(time);
    }

    return <button onClick={doDeclare}>
      {this.props.time} min
    </button>;
  }
}

export default ArrivalDeclarationButton;
