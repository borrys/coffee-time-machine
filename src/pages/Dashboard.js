import React from 'react';
import TimeTableContainer from '../timeTable/TimeTableContainer';
import ArrivalDeclarationContainer from '../arrivalDeclaration/ArrivalDeclarationContainer';

export default class Dashboard extends React.Component {
  render () {
    return <div>
      <TimeTableContainer />
      <ArrivalDeclarationContainer />
    </div>;
  }
}
