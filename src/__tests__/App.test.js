import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from '../App';

describe('<App />', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});
