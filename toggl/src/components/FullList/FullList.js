import React, { Component } from 'react';
import Todo from '../Todo';

class FullList extends Component {
  render() {
    const {
      todos,
      removeFromTodos,
      toggleResolved,
      listClassName,
      toggleTimeSpent,
    } = this.props;
    return (
      <div className="days_block">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            remove={removeFromTodos}
            toggleResolved={toggleResolved}
            listClassName={listClassName}
            toggleTimeSpent={toggleTimeSpent}
            {...todo}
          />
        ))}
      </div>
    );
  }
}

export default FullList;
