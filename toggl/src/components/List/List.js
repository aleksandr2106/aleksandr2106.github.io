import React, { Component } from 'react';

class List extends Component {
  render() {
    const {
      title,
      timeToComplete,
      id,
      remove,
      complete,
      listClassName,
    } = this.props;

    return (
      <div className="single_list_block">
        <a onClick={() => complete(id)}>
          <i class="far fa-check-circle" />
        </a>
        <p class="text_todo">{title}</p>
        <p class="time_to_complete">Time to complete {timeToComplete} h.</p>
        <p className="time_spend">Time spend 3:30 h.</p>

        <a onClick={() => remove(id)}>
          <i class="fas fa-play-circle" />
        </a>
        <a onClick={() => remove(id)}>
          <i class="far fa-times-circle" />
        </a>
      </div>
    );
  }
}

export default List;
