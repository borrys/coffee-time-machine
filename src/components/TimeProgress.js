import React from 'react';
import moment from 'moment';

const MAX_TIME = 30;

class TimeProgress extends React.Component {
  render() {
    const time = moment(this.props.time);
    const now = moment();
    const timeLeft = time.diff(now, 'minutes', true);

    const timesUp = timeLeft <= 0;
    const nearInfinite = timeLeft >= MAX_TIME;

    let timeLeftTxt = '';
    if (nearInfinite) timeLeftTxt = '\u221E';
    else timeLeftTxt = timeLeft.toFixed(0) + ' mins';

    const declaredTimeTxt = time.format('HH:mm');

    const width = Math.min(timeLeft, MAX_TIME) / MAX_TIME * 100;
    const progressBarStyle = {
      width: width + '%'
    };

    return <div className='time-progress'>
      <div className='caption'>{timeLeftTxt}</div>
      <div className='caption right'>{declaredTimeTxt}</div>
      <div className='progress-bar' style={progressBarStyle}></div>
    </div>
  }
}

module.exports = TimeProgress;
