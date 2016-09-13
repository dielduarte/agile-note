import React from 'react';
import LoginForm from '../components/loginForm.jsx';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="login__section">
        <div className="login__wrapper">
          <h1 className="login__title">Cadastre-se, ou faça login abaixo:</h1>
          <a href="#" className="login__link--register" onClick="showRegisterComponent()">cadastre-se clicando aqui!</a>
          <LoginForm />
        </div>
      </section>
    );
  }
}
