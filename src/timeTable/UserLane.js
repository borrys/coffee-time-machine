import React from 'react';
import TimeProgress from './TimeProgress';

class User extends React.Component {
  render() {
    const { name, arrival } = this.props.user;

    return <dl className='user-lane'>
      <dt>{name}</dt>
      <dl><TimeProgress time={arrival} /></dl>
    </dl>;
  }
}

module.exports = User;
