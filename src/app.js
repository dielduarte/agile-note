import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, hashHistory, Redirect } from 'react-router';

import './config/firebase';
import './config/webfonts';

import LoginPage from './pages/loginPage.jsx';
import MainPage from './pages/mainPage.jsx';

import './assets/css/main.scss';

ReactDom.render(<Router history={hashHistory}>
                  <Route name="Login" path="/login" component={LoginPage}>
                  </Route>
                  <Redirect from="/" to="Login" />
                </Router>,
                document.getElementById('app'));
