import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import  LoginForm  from './loginForm.jsx';
import TextField from 'react-md/lib/TextFields';
import { RaisedButton } from 'react-md/lib/Buttons';


describe('<LoginForm />', function () {
  it('should have 2 inputs for email and passowrd', function () {
    const wrapper = shallow(<LoginForm/>);
    expect(wrapper.find(TextField)).to.have.length(2);
  });

  it('should have 1 RaisedButton for login', function () {
    const wrapper = shallow(<LoginForm/>);
    expect(wrapper.find(RaisedButton)).to.have.length(1);
  });
});
