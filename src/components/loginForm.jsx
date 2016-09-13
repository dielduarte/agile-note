import React from "react";
import TextField from 'react-md/lib/TextFields';
import { RaisedButton } from 'react-md/lib/Buttons';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="login__form">
        <TextField label="E-mail"
                   lineDirection="center"
                   fullWidth/>

        <TextField label="Senha"
                  type="password"
                  lineDirection="center"
                  fullWidth/>

        <RaisedButton label="Entrar"
                      primary
                      className="login__form__btn"/>
      </form> 
    );
  }
}
