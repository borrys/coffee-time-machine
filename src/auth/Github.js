import React from 'react';
import 'whatwg-fetch';
import './style.scss';

export default class Github extends React.Component {
  render() {
    return <div className='github'>
      <button className='authorize'  onClick={this.githubAuth.bind(this)}>Sign In</button>
    </div>;
  }

  githubAuth() {
    window.open('http://localhost:5050/auth', '_self');
  }
}
