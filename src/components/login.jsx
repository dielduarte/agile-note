import React from "react";

export class Login extends React.Component {
  constructor(props) {
   super(props);
  }
  render() {
    return (
      <div className="login__wrapper">
        <h1 className="login__title">Cadastre-se, ou faça login abaixo:</h1>
      </div>
    );
  }
}
