import React from 'react';
import UserLane from './UserLane';
import './style.scss';

function user(u) {
  return <UserLane user={u} key={u.name}/>;
}

class TimeTable extends React.Component {
  render() {
    return <div className='time-table'>
      {this.props.users.map(user)}
    </div>;
  }
}

export default TimeTable;
