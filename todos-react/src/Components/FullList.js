import React, { Component } from 'react';
import List from './List';

class FullList extends Component {
  render() {
    const { todos, removeFromTodos, completeTodos, listClassName } = this.props;

    return (
      <div className="todos">
        {todos.map(todo =>
          todo.done === 1 ? (
            <div className="list complete">
              <List
                key={todo.id}
                id={todo.id}
                title={todo.title}
                remove={removeFromTodos}
                complete={completeTodos}
                listClassName={listClassName}
              />
            </div>
          ) : (
            <div className="list">
              <List
                key={todo.id}
                id={todo.id}
                title={todo.title}
                remove={removeFromTodos}
                complete={completeTodos}
                listClassName={listClassName}
              />
            </div>
          )
        )}
      </div>
    );
  }
}

export default FullList;
