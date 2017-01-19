import React from 'react';
import {IndexLink, Link} from 'react-router';

export default class Navigation extends React.Component {
  render () {
    return <nav>
      <IndexLink to='/' activeClassName='active'>Timetable</IndexLink>
      <Link to='settings' activeClassName='active'>Settings</Link>
    </nav>;
  };
}
