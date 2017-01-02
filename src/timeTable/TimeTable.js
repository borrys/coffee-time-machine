import React from 'react';
import UserLane from './UserLane';
import './style.scss';

function user(user, now) {
  return <UserLane user={user} now={now} key={user.name}/>;
}

class TimeTable extends React.Component {
  render() {
    const now = this.props.now;
    return <div className='time-table'>
      {this.props.users.map(u => user(u, now))}
    </div>;
  }
}

export default TimeTable;
