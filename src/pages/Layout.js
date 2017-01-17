import React from 'react';
import Navigation from './navigation';

export default class Layout extends React.Component {
  render () {
    return <div>
      <Navigation />
      {this.props.children}
    </div>;
  }
}
