import React, { Component } from 'react';
import FullList from './Components/FullList';
import './App.css';

class App extends Component {
  state = {
    taskTitle: '',
    todos: [],
    listClassName: 'list',
    activeTittle: -1,
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
        ? (todos[key]['title'] += '__complete!!!')
        : (todos[key]['title'] += '');
    }
    this.setState({
      todos: [...todos],
    });
    console.log(todos);

    // for (var i = 0; i < todos.length; i++) {
    //   todos[i]['id'] === id
    //     ? console.log('URRRAAAA', id)
    //     : console.log('Ne to', id);
    // }
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

/*import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    query: '',
    todos: [],
    liClassName: '',
  };

  addTodos = () => {
    //  this.state.todos.push(this.state.query);

    const { query, todos } = this.state;

    this.setState({
      todos: [
        ...todos,
        {
          id: todos.length,
          query: query,
        },
      ],
      query: '',
    });
  };

  clearTodos = () => {
    this.setState({
      query: '',
      todos: [],
    });
  };

  changeClassName = () => {
    this.setState({
      liClassName: 'active_complete',
    });
  };

  render() {
    const { query, liClassName } = this.state;
    const items = this.state.todos.map(todo => (
      <li className={this.state.liClassName}>
        <button className="complete" onClick={this.changeClassName.bind(this)}>
          V
        </button>
        <div className="main_list">{todo}</div>
        <button className="remove">X</button>
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

export default App;*/
