import React, { Component } from 'react';

class NewTodoForm extends Component {
  state = {
    title: ''
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ title: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const todo = {
      id: Date.now(),
      title: this.state.title,
      completed: false
    };
    this.props.addTodo(todo);
    this.setState({title: ''})
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleInput}
          placeholder="Title"
        />
        <button>Add New</button>
      </form>
    );
  }
}

export default NewTodoForm;
