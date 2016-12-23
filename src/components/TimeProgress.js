import React from 'react';
import moment from 'moment';

const MAX_TIME = 30;

function calcTimeLeft(time) {
  const now = moment();
  return time.diff(now, 'minutes', true);
}

function getTimeLeftCaption(timeLeft) {
  const timesUp = timeLeft <= 0;
  const nearInfinite = timeLeft >= MAX_TIME;

  let timeLeftTxt = '';
  if (nearInfinite) timeLeftTxt = '\u221E';
  else if(!timesUp) timeLeftTxt = timeLeft.toFixed(0) + ' mins';

  return timeLeftTxt;
}

function getBarStyle(timeLeft) {
  const width = Math.min(timeLeft, MAX_TIME) / MAX_TIME * 100;

  return {
    width: width + '%'
  };
}

class TimeProgress extends React.Component {
  render() {
    const declaredTime = moment(this.props.time); 
    const timeLeft = calcTimeLeft(declaredTime);
    const timeLeftCaption = getTimeLeftCaption(timeLeft);
    const barStyle = getBarStyle(timeLeft);

    return <div className='time-progress'>
      <div className='caption'>{timeLeftCaption}</div>
      <div className='caption right'>{declaredTime.format('HH:mm')}</div>
      <div className='progress-bar' style={barStyle}></div>
    </div>;
  }
}

module.exports = TimeProgress;
