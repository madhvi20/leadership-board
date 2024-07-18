import React from 'react';
import ReactDOM from 'react-dom';
import * as reactRedux from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

ReactDOM.render(
  <reactRedux.Provider store={store}>
    <App />
  </reactRedux.Provider>,
  document.getElementById('root')
);
