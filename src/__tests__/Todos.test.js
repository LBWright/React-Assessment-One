import React, { Fragment } from 'react';
import { shallow, mount } from 'enzyme';
import 'jsdom-global/register';

import Todos from '../components/Todo';

describe('<Todos />', () => {
  it('should render without crashing', () => {
    shallow(<Todos>{jest.fn}</Todos>);
  });
});
