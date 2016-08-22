import React from "react";
import ReactDom from "react-dom";
import { Router, Route, Link, hashHistory, Redirect } from 'react-router';

import { Login } from './pages/login.js';
import { Main } from './pages/Main.js';

import './assets/css/main.scss';

ReactDom.render(<Router history={hashHistory}>
                  <Route name="Login" path="/login" component={Login}>
                  </Route>
                  <Redirect from="/" to="Login" />
                </Router>,
                document.getElementById('app'));
