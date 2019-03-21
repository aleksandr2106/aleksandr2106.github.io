import React, { Component } from 'react';
import Timer from '../Timer';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSpent: props.timeSpent,
    };
  }

  updateTimeSpent = () => {
    const { timeSpent } = this.state;

    this.setState({
      timeSpent: timeSpent + 1,
    });
  };

  render() {
    const {
      title,
      estimate,
      id,
      remove,
      done,
      toggleResolved,
      listClassName,
    } = this.props;

    const { timeSpent } = this.state;

    return (
      <div className={done ? 'complete' : ''}>
        <div className="single_list_block">
          <a onClick={() => toggleResolved(id)}>
            <i class="far fa-check-circle" />
          </a>
          <p class="text_todo">{title}</p>
          <p class="time_to_complete">Time to complete {estimate} h.</p>
          <p className="time_spend">
            <Timer onTimeChange={this.updateTimeSpent} timeSpent={timeSpent} />
          </p>

          <a onClick={() => remove(id)}>
            <i class="far fa-times-circle" />
          </a>
        </div>
      </div>
    );
  }
}

export default Todo;
