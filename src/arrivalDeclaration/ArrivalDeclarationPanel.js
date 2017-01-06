import React from 'react';
import ArrivalDeclarationButton from './ArrivalDeclarationButton';
import style from './style.scss';

const TIMES = [5, 10, 15, 30, 60];

class ArrivalDeclarationPanel extends React.Component {
  render() {
    if (this.props.visible) {
      return <div className='declaration-panel'> {
        TIMES.map(t => (
          <ArrivalDeclarationButton time={t} declareArrival={this.props.declareArrival} key={t}/>
        )) 
      } </div>;
    }
    return <div />;
  }
}

export default ArrivalDeclarationPanel;
