import React from "react";
import ReactDom from "react-dom";
import './assets/css/index.scss';

class Layout extends React.Component {
  render() {
    return (
      <h1>diel</h1>
    );
  }
}

ReactDom.render(<Layout/>, document.getElementById('app'));
