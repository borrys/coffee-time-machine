import React from 'react';
import {IndexLink, Link} from 'react-router';
import CoffeePartyStarterContainer from '../partyStarter/CoffeePartyStarterContainer';
import Github from '../auth/Github';

export default class Navigation extends React.Component {
  render () {
    return <nav>
      <IndexLink to='/' activeClassName='active'>Timetable</IndexLink>
      <Link to='settings' activeClassName='active'>Settings</Link>

      <div className='separator' />
      
      <CoffeePartyStarterContainer />

      <Github />
    </nav>;
  };
}
