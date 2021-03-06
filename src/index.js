import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ErrorBoundry from './components/errorBoundry';
import './index.scss';

ReactDOM.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>
,document.getElementById('root'));

