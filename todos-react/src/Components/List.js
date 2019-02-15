import React, { Component } from 'react';

class List extends Component {
  render() {
    const { title, id, remove, complete, listClassName } = this.props;

    return (
      <div className={listClassName}>
        <button onClick={() => complete(id)}>V</button>

        {title}

        <button onClick={() => remove(id)}>X</button>
      </div>
    );
  }
}

export default List;
