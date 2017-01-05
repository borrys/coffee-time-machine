import React from 'react';
import style from './style.scss';


export default class Modal extends React.Component {
  render() {
    return <div className='modal' onClick={this.onClick.bind(this)}>
      {this.props.children}
    </div>;
  }

  onClick(event) {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      this.props.onClick();
    }
  }
}
