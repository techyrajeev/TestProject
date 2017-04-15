require('babel-polyfill');
require('../sass/app.scss');
import Routes   from './routes';
import Actions  from './actions';
import ReactDOM from 'react-dom';

Actions.getAllData();
ReactDOM.render(Routes, document.querySelector('.common-home'));
