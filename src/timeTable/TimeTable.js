import React from 'react';
import UserLane from './UserLane';
import './style.scss';

function user(user, now) {
  return <UserLane user={user} now={now} key={user.name}/>;
}

class TimeTable extends React.Component {
  render() {
    let content;
    if (this.props.users.length) {
      const now = this.props.now;
      content = this.props.users.map(u => user(u, now));
    } else {
      content = <h2>Noone has declared yet :(</h2>;
    }

    return <div className='time-table'>
      {content}
    </div>;
  }
}

export default TimeTable;
