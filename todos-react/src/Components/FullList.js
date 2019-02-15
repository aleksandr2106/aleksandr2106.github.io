import React, { Component } from 'react';
import List from './List';

class FullList extends Component {
  render() {
    const { todos, removeFromTodos, completeTodos, listClassName } = this.props;

    return (
      <div className="todos">
        {todos.map(todo => (
          <List
            key={todo.id}
            id={todo.id}
            title={todo.title}
            remove={removeFromTodos}
            complete={completeTodos}
            listClassName={listClassName}
          />
        ))}
      </div>
    );
  }
}

export default FullList;
