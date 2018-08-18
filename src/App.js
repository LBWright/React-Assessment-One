import React, { Component, Fragment } from 'react';
import Todos, { TodoList, NewTodoForm } from './components/Todo';

class App extends Component {
  render() {
    return (
      <div>
        <Todos>
          {({ todos, addTodo, completeTodo, removeCompleted }) => (
            <Fragment>
              <NewTodoForm addTodo={addTodo} />
              <button onClick={removeCompleted}>Clear Completed</button>
              <TodoList completeTodo={completeTodo} todos={todos} />
            </Fragment>
          )}
        </Todos>
      </div>
    );
  }
}

export default App;
