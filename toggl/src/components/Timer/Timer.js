import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  format = () => {
    const { timeSpent } = this.props;

    const date = new Date(timeSpent * 1000);

    let hours = date.getUTCHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();

    return `${hours.length === 1 ? '0' : ''}${hours}:${
      minutes.length === 1 ? '0' : ''
    }${minutes}:${seconds.length === 1 ? '0' : ''}${seconds}`;
  };

  startTimer = () => {
    const { onTimeChange } = this.props;
    clearInterval(this.timer);
    this.timer = setInterval(onTimeChange, 1000);
  };
  stopTimer() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="timer">
        <p>Time spent {this.format()} h.</p>

        <button onClick={this.startTimer}>
          <i class="fas fa-play-circle" />
        </button>
        <a onClick={this.stopTimer}>
          <i class="fas fa-stop-circle" />
        </a>
      </div>
    );
  }
}

export default Timer;
