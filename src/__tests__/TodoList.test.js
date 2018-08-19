import React from 'react';
import { shallow } from 'enzyme';

import { TodoList } from '../components/Todo';

describe('<TodoList />', () => {
  it('should render without crashing', () => {
    shallow(<TodoList todos={[]} completeTodo={jest.fn} />);
  });

  it('should render props.todos as a list of Todo components', () => {
    const todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      }
    ];
    const wrapper = shallow(<TodoList todos={todos} completeTodo={jest.fn} />);
    expect(wrapper.find('TodoListItem').length).toEqual(todos.length);
  });
});
