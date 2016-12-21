import './stylesheets/application.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import TimeTable from './components/TimeTable.js';
import moment from 'moment';

const users = [
  {name: 'John', arrival: moment().add(5, 'minutes').valueOf()},
  {name: 'Marry', arrival: moment().add(10, 'minutes').valueOf()}
];

ReactDOM.render(
  <TimeTable users={users}/>,
  document.getElementById('app')
);
