import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import reportWebVitals from './reportWebVitals';
import {CookiesProvider} from 'react-cookie'
import {Provider} from 'mobx-react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import RootStore from './store'
import Root from './Root'


const root = new RootStore();


ReactDOM.render(
  <CookiesProvider >
    <Provider {...root}>
      <Router>
        <Route path="/" render={props => <Root {...props} />} />
      </Router>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
