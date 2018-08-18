import React from 'react';

const TodoListItem = ({ id, title, completed, completeTodo }) => {
  return (
    <div>
      <h4>{title}</h4>
      <h5>{completed}</h5>
      <button
        disabled={completed}
        onClick={() => {
          completeTodo(id);
        }}
      >
        Complete
      </button>
    </div>
  );
};

export default TodoListItem;
