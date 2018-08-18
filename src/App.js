import React, { Component, Fragment } from 'react';
import Todos, { TodoList, NewTodoForm } from './components/Todo';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Todos>
          {({ todos, addTodo, completeTodo, removeCompleted }) => (
            <Fragment>
              <NewTodoForm addTodo={addTodo} />
              <button onClick={removeCompleted}>Clear Completed</button>
              <TodoList completeTodo={completeTodo} todos={todos} />
            </Fragment>
          )}
        </Todos>
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  box-sizing: border-box;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
