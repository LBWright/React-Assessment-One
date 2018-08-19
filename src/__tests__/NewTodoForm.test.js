import React from 'react';
import { shallow } from 'enzyme';

import { NewTodoForm } from '../components/Todo';

describe('<NewTodoForm />', () => {
  it('should render without crashing', () => {
    shallow(<NewTodoForm addTodo={jest.fn} />);
  });

  it('should update state on input change', () => {
    const wrapper = shallow(<NewTodoForm addTodo={jest.fn} />);

    wrapper.find('.input-todo').simulate('change', {
      target: {
        value: 'Go on a walk'
      }
    });

    expect(wrapper.state().title).toBe('Go on a walk');
  });

  it('should call props.addTodo on submit', () => {
    const addTodo = jest.fn();
    const wrapper = shallow(<NewTodoForm addTodo={addTodo} />);

    wrapper.find('.input-todo').simulate('change', {
      target: {
        value: 'Do some unit tests'
      }
    });
    wrapper.find('.new-todo').simulate('submit', {
      preventDefault() {}
    });

    expect(addTodo).toHaveBeenCalled();
  });

  it('should set this.state.title to an empty string after submit', () => {
    const addTodo = jest.fn();
    const wrapper = shallow(<NewTodoForm addTodo={addTodo} />);

    wrapper.find('.input-todo').simulate('change', {
      target: {
        value: 'Do some unit tests'
      }
    });

    wrapper.find('.new-todo').simulate('submit', {
      preventDefault() {}
    });

    expect(wrapper.instance().state.title).toBe('');
  });

  it('should not allow form submit with an empty title', () => {
    const addTodo = jest.fn();
    const wrapper = shallow(<NewTodoForm addTodo={addTodo} />);

    wrapper.find('.input-todo').simulate('change', {
      target: {
        value: ''
      }
    });

    wrapper.find('.new-todo').simulate('submit', {
      preventDefault() {}
    });

    expect(addTodo).toHaveBeenCalledTimes(0);
  });
});
