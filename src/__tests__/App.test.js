import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('<App />', () => {
  it('should render without crashing', () => {
    wrapper;
  });
});
