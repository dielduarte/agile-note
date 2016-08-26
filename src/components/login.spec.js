import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import { Login } from './login.jsx';

describe('<Login/>', function () {
  it('should have an div to login wrapper', function () {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('.login__wrapper')).to.have.length(1);
  });
});
