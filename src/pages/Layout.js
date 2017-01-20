import React from 'react';
import Navigation from './navigation';
import style from './style.scss';
import CoffeePartyNotificationContainer from '../coffeeParty/CoffeePartyNotificationContainer';

export default class Layout extends React.Component {
  render () {
    return <div>
      <Navigation />
      {this.props.children}
      <CoffeePartyNotificationContainer />
    </div>;
  }
}
