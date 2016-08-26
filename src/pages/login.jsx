import React from 'react';
import { Login } from '../components/login.jsx';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="login__section">
        <Login />
      </section>
    );
  }
}
