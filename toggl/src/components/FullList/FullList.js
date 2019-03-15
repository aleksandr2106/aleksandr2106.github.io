import React, { Component } from 'react';
import List from '../List';

class FullList extends Component {
  render() {
    const { todos, removeFromTodos, completeTodos, listClassName } = this.props;

    return (
      <div className="days_block">
        {todos.map(todo =>
          todo.done === 1 ? (
            <div className="complete">
              <List
                key={todo.id}
                id={todo.id}
                title={todo.title}
                timeToComplete={todo.timeToComplete}
                remove={removeFromTodos}
                complete={completeTodos}
                listClassName={listClassName}
              />
            </div>
          ) : (
            <div className="">
              <List
                key={todo.id}
                id={todo.id}
                title={todo.title}
                timeToComplete={todo.timeToComplete}
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
