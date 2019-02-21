import React, { Component } from 'react';
import FullList from './Components/FullList';
import './App.css';

class App extends Component {
  state = {
    taskTitle: '',
    todos: [],
    listClassName: 'list',
  };

  handleAddToTodos = () => {
    const { todos, taskTitle } = this.state;

    if (!taskTitle) {
      alert('Enter all the fields!');
      return;
    }

    this.setState({
      todos: [
        ...todos,
        {
          id: Math.floor(Math.random() * 100000),
          title: taskTitle,
          done: 0,
        },
      ],
      taskTitle: '',
    });
  };

  clearTodos = () => {
    this.setState({
      taskTitle: '',
      todos: [],
    });
  };

  removeFromTodos = id => {
    const { todos } = this.state;

    const newTodos = todos.filter(p => p.id !== id);

    this.setState({ todos: newTodos });
  };

  completeTodos = id => {
    const { todos } = this.state;

    for (var key in todos) {
      todos[key]['id'] === id
        ? (todos[key]['done'] = 1)
        : (todos[key]['done'] += 0);
    }
    this.setState({
      todos: [...todos],
    });
  };

  render() {
    const { todos, taskTitle } = this.state;

    return (
      <div className="App">
        <button onClick={this.clearTodos}>Clear Todos</button>

        <input
          type="text"
          onChange={e => this.setState({ taskTitle: e.target.value })}
          value={taskTitle}
          placeholder="What needs to be done?"
        />

        <button onClick={this.handleAddToTodos}>Add to Todos</button>
        <FullList
          todos={todos}
          removeFromTodos={this.removeFromTodos}
          completeTodos={this.completeTodos}
          listClassName={this.state.listClassName}
        />
      </div>
    );
  }
}

export default App;
