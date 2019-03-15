import React, { Component } from 'react';
import Timer from '../Timer';
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
        <p className="time_spend">
          <Timer />
        </p>

        <a onClick={() => remove(id)}>
          <i class="far fa-times-circle" />
        </a>
      </div>
    );
  }
}

export default List;
