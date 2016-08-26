import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, hashHistory, Redirect } from 'react-router';

import { LoginPage } from './pages/login.jsx';
import { MainPage } from './pages/main.jsx';

import './assets/css/main.scss';

ReactDom.render(<Router history={hashHistory}>
                  <Route name="Login" path="/login" component={LoginPage}>
                  </Route>
                  <Redirect from="/" to="Login" />
                </Router>,
                document.getElementById('app'));
