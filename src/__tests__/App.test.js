import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should render one Todos component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Todos').length).toEqual(1);
  });
});
