import React from 'react';
import moment from 'moment';

const MAX_TIME = 30;

class TimeProgress extends React.Component {
  render() {
    const time = this.props.time;
    const now = moment();
    const timeLeft = moment(time).diff(now, 'minutes', true);

    const timesUp = timeLeft <= 0;
    const nearInfinite = timeLeft >= MAX_TIME;

    let displayTxt = '';
    if (nearInfinite) displayTxt = '\u221E';
    else displayTxt = timeLeft.toFixed(0) + ' mins';

    const width = Math.min(timeLeft, MAX_TIME) / 0.6;
    const progressBarStyle = {
      width: width + '%'
    };

    return <div className='time-progress'>
      <div className='progress-bar' style={progressBarStyle}>
        <div className='time-left'>{displayTxt}</div>
      </div>
    </div>
  }
}

module.exports = TimeProgress;
