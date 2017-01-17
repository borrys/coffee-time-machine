import React from 'react';
import {IndexLink, Link} from 'react-router';

export default class Navigation extends React.Component {
  render () {
    return <nav>
      <IndexLink to='/'>Timetable</IndexLink>
      <Link to='settings'>Settings</Link>
    </nav>;
  };
}
