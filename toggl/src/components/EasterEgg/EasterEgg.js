import React, { Component } from 'react';
import './EasterEgg.scss';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';
const Pip = ({ isOn }) => <div className={`pip ${isOn && 'pip--on'}`} />;

const BinaryDigit = ({ base2NumberAsArray }) => (
  <div className="binary-digit">
    {base2NumberAsArray.map((pip, idx) => (
      <Pip key={idx} isOn={pip === 1} />
    ))}
  </div>
);

const BinaryDigitGroup = ({ group }) => (
  <div className="binary-digit-group">
    {group.map((binaryDigit, idx) => (
      <BinaryDigit base2NumberAsArray={binaryDigit} key={idx} />
    ))}
  </div>
);

class EasterEgg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digits: [[], [], []],
    };
  }
  state = {
    userAnswer: '',
  };
  componentDidMount() {
    setInterval(
      function() {
        const date = new Date();
        const newDigits = [
          numberAsBinaryArrayPair(date.getHours()),
          numberAsBinaryArrayPair(date.getMinutes()),
          numberAsBinaryArrayPair(date.getSeconds()),
        ];
        this.setState({
          digits: newDigits,
        });
      }.bind(this),
      1000
    );
  }

  checkUserAnswer() {
    this.state.userAnswer === 'binary clock'
      ? alert('Congratulations, you have joined the list of favorites')
      : alert('Try again!');
  }

  render() {
    return (
      <div className="body">
        <div className="menu">
          <div className="logo">
            <div className="circle_logo_icon">
              <i className="fas fa-power-off" />
            </div>
            <p>toggl</p>
          </div>
          <div className="main_list_menu">
            <Link to={`/`} className="menu_single_elements">
              <i className="far fa-clock" />
              <p>Timer</p>
            </Link>

            <Link to={`/dashboard`} className="menu_single_elements">
              <i className="fas fa-chart-bar" />
              <p>Dashboard</p>
            </Link>

            <Link to={`/reports`} className="menu_single_elements">
              <i className="fas fa-file-alt" />
              <p>Reports</p>
            </Link>
            <div className="menu_single_elements">
              <i className="fas fa-chart-line" />
              <p>Insights</p>
            </div>
            <div className="menu_single_elements">
              <i className="far fa-star" />
              <p>Saved Reports</p>
            </div>
          </div>
          <div className="manage_menu">
            <h6>Manage</h6>
            <div className="menu_single_elements">
              <i className="far fa-folder" />
              <p>Projects</p>
            </div>
            <div className="menu_single_elements">
              <i className="fas fa-user" />
              <p>Clients</p>
            </div>
            <div className="menu_single_elements">
              <i className="fas fa-users" />
              <p>Team</p>
            </div>
            <div className="menu_single_elements">
              <i className="fas fa-briefcase" />
              <p>Workspaces</p>
            </div>
            <div className="menu_single_elements">
              <i className="fas fa-tag" />
              <p>Tags</p>
            </div>
            <Link to={`/help`} className="menu_single_elements">
              <i className="far fa-question-circle" />
              <p>Help</p>
            </Link>
          </div>
        </div>
        <div className="top_part_of_functionals">
          <p>This is our Easter Egg!!</p>
          <div className="top_functionals">
            <Clock
              className="clock"
              format={'HH:mm:ss'}
              ticking={true}
              timezone={'UA/Pacific'}
            />
          </div>
        </div>
        <div className="info_easter">
          <h2>
            Congratulations, you have the opportunity to increase your ability
            to use this site by guessing this riddle. For the correct answer,
            you will receive an "advanced user" icon and the ability to use our
            website 24/7.
          </h2>
          <p>What is shown under this text?</p>
        </div>
        <div className="clock_easter">
          {this.state.digits.map(digit => (
            <BinaryDigitGroup group={digit} />
          ))}
        </div>
        <div className="easter_form">
          <p>
            Write the answer in small letters, separated by a space, without
            punctuation. (2 words)
          </p>
          <input
            type="text"
            onChange={e => this.setState({ userAnswer: e.target.value })}
            value={this.state.userAnswer}
            placeholder="Enter your answer!"
            required
          />
          <button onClick={this.checkUserAnswer}>Check</button>
        </div>
      </div>
    );
  }
}

export default EasterEgg;

function numberToBinary(base10Number) {
  const base2Values = [8, 4, 2, 1];
  let output = [0, 0, 0, 0];
  let remainder = base10Number;

  base2Values.forEach((val, idx) => {
    const left = remainder - val;

    if (left >= 0) {
      output[idx] = 1;
      remainder = left;
    }
  });

  return output;
}

function numberAsBinaryArrayPair(number) {
  const pair = [];
  if (number < 10) {
    pair[0] = numberToBinary();
    pair[1] = numberToBinary(number);
  } else {
    const numberAsArray = String(number).split('');
    pair[0] = numberToBinary(parseInt(numberAsArray[0], 10));
    pair[1] = numberToBinary(parseInt(numberAsArray[1], 10));
  }

  return pair;
}
