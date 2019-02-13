import React, { Component } from 'react';
import countries from './countries';
import './App.css';

class App extends Component {
  state = {
    query: '',
    todos: [],
  };

  addTodos = () => {
    this.state.todos.push(this.state.query);
    this.setState({
      query: '',
    });
  };

  clearTodos = () => {
    this.setState({
      query: '',
      todos: [],
    });
  };

  render() {
    const { query } = this.state;
    const items = this.state.todos.map(todo => (
      <li>
        <div className="complete">
          <p>V</p>
        </div>
        {todo}
      </li>
    ));
    return (
      <div>
        <h3>todos</h3>
        <div className="todos_form">
          <button onClick={this.clearTodos.bind(this)}>Clear list</button>
          <input
            placeholder="What needs to be done?"
            onChange={e => this.setState({ query: e.target.value })}
            value={query}
          />
          <button onClick={this.addTodos.bind(this)}>Add</button>
          <ul>{items}</ul>
        </div>
      </div>
    );
  }
}

export default App;
