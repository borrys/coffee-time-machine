import React from 'react';
import style from './style.scss';

class CoffeePartyStarter extends React.Component {
  render() {
    return <div className='coffee-party-starter'>
      <button onClick={this.props.startParty}>Start coffee party!</button>
    </div>;
  }
}

export default CoffeePartyStarter;
