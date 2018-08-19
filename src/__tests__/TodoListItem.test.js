import React from 'react';
import { shallow } from 'enzyme';

import { TodoListItem } from '../components/Todo';

describe('<TodoListItem />', () => {
  it('should render without crashing', () => {
    shallow(
      <TodoListItem
        id={1}
        title="Todo One"
        completed={false}
        completeTodo={jest.fn}
      />
    );
  });
  it('should call props.completeTodo on button click', () => {
    const completeTodoSpy = jest.fn();
    const wrapper = shallow(
      <TodoListItem
        id={1}
        title="Todo One"
        completed={false}
        completeTodo={completeTodoSpy}
      />
    ).dive();

    wrapper.find('.complete-btn').simulate('click');
    expect(completeTodoSpy).toHaveBeenCalled();
  });
});
