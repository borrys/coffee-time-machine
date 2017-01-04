import React from 'react';
import moment from 'moment';
import style from './style.scss';

class CoffeePartyContainer extends React.Component {
  render() {
    const timer = moment(this.props.time).format('mm:ss');

    if (this.props.visible) {
      return <div className='coffee-notification'>
        <h1>Coffee party started</h1>
        <div className='timer'>{timer}</div>
      </div>;
    }
    return <div />;
  }
}

export default CoffeePartyContainer;
