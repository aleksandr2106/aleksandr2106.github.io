import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, timeFormat: '00:00' };
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    let hours = 0,
      minutes = 0,
      seconds = 0;

    hours = Math.floor((this.state.count + 1) / 3600);
    if (hours < 10) {
      hours = '0' + hours;
    }
    minutes = Math.floor((this.state.count + 1 - hours * 3600) / 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    this.setState({
      count: this.state.count + 1,
      timeFormat: `${hours}:${minutes}`,
    });
  }
  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 1000);
  }
  stopTimer() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="timer">
        <p>Time spend {this.state.timeFormat} h.</p>

        <a onClick={this.startTimer.bind(this)}>
          <i class="fas fa-play-circle" />
        </a>
        <a onClick={this.stopTimer.bind(this)}>
          <i class="fas fa-stop-circle" />
        </a>
      </div>
    );
  }
}

export default Timer;
