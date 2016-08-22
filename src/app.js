import React from "react";
import ReactDom from "react-dom";
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';


import './assets/css/index.scss';

class Layout extends React.Component {
  render() {
    return (
      <h1>Agile notes</h1>
    );
  }
}

ReactDom.render(<Router history={hashHistory}>
                  <Route path="/" component={Layout}>
                     <IndexRoute component={Layout}/>
                  </Route>
                </Router>,
                document.getElementById('app'));
