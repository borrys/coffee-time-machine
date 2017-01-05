import React from 'react';
import style from './style.scss';

export default class Modal extends React.Component {
  render() {
    return <div className='modal'>
      {this.props.children}
    </div>;
  }
}
