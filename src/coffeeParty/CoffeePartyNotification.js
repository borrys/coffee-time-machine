import React from 'react';
import moment from 'moment';

class CoffeePartyContainer extends React.Component {
  render() {
    const timer = moment(this.props.time).format('mm:ss');

    if (this.props.visible) {
      return <div>
        <h1>Coffee party started</h1>
        {timer}
      </div>;
    }
    return <div />;
  }
}

export default CoffeePartyContainer;
