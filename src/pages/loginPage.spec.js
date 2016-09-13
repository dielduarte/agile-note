import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import LoginPage  from './loginPage.jsx';
import  LoginForm  from '../components/loginForm.jsx';

describe('<LoginPage/>', function () {
  it('should have a section to with class login__section', function () {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper.find('.login__section')).to.have.length(1);
  });

  it('should have a login wrapper element  with class login__wrapper', function () {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper.find('.login__wrapper')).to.have.length(1);
  });

  it('should have a element with class login__title', function () {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper.find('.login__title')).to.have.length(1);
  });

  it('should have a <LoginForm> component', function () {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper.find(LoginForm)).to.have.length(1);
  });

  describe('Link to register component', function () {
    it('should have a link for register component', function () {
      const wrapper = shallow(<LoginPage/>);
      expect(wrapper.find('.login__link--register')).to.have.length(1);
    });

    it('should have onClick event to showRegisterComponent', function () {
      const wrapper = shallow(<LoginPage/>);
      expect(wrapper.find('[onClick="showRegisterComponent()"]')).to.have.length(1);
    });
  });
});
