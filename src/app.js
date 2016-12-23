import './stylesheets/application.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import TimeTable from './components/TimeTable.js';
import moment from 'moment';

const users = [
  {name: 'John', arrival: moment().add(5, 'minutes').valueOf()},
  {name: 'Marry', arrival: moment().add(10, 'minutes').valueOf()},
  {name: 'Jane', arrival: moment().add(2, 'minutes').valueOf()},
  {name: 'George', arrival: moment().add(36, 'minutes').valueOf()}
];

ReactDOM.render(
  <TimeTable users={users}/>,
  document.getElementById('app')
);
