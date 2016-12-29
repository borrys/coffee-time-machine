import React from 'react';
import ArrivalDeclarationButton from './ArrivalDeclarationButton';

const TIMES = [5, 10, 15, 30, 60];

class ArrivalDeclarationPanel extends React.Component {
  render() {
    return <div className='declaration-panel'> {
      TIMES.map(t => (
        <ArrivalDeclarationButton time={t} declareArrival={this.props.declareArrival} key={t}/>
      )) 
    } </div>;
  }
}

export default ArrivalDeclarationPanel;
