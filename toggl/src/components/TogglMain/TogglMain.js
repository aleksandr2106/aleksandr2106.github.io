import React, { Component } from 'react';
import FullList from '../FullList';
import './TogglMain.scss';
import './reset.css';
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';
var store = require('store');
store.set('16.03', [
  {
    title: 'olololololo',
    timeToComplete: '1:00',
    time_spend: '2:00',
  },
  {
    title: 'olololololodsgsd',
    timeToComplete: '2:00',
    time_spend: '3:00',
  },
]);
store.set('15.03', { title: 'work hard' });
store.set('14.03', { title: 'fixed bug' });
store.set('13.03', { title: 'klsfjskl' });
class TogglMain extends Component {
  state = {
    taskTitle: '',
    timeToComplete: '',
    todos: [],
    listClassName: 'list',
  };

  handleAddToTodos = () => {
    const { todos, taskTitle, timeToComplete } = this.state;

    if (!taskTitle || !timeToComplete) {
      alert('Enter all the fields!');
      return;
    }

    this.setState({
      todos: [
        ...todos,
        {
          id: Math.floor(Math.random() * 100000),
          title: taskTitle,
          timeToComplete: timeToComplete,
          done: 0,
        },
      ],
      taskTitle: '',
      timeToComplete: '',
    });
  };

  clearTodos = () => {
    this.setState({
      taskTitle: '',
      timeToComplete: '',
      todos: [],
    });
  };

  removeFromTodos = id => {
    const { todos } = this.state;

    const newTodos = todos.filter(p => p.id !== id);

    this.setState({ todos: newTodos });
  };

  completeTodos = id => {
    const { todos } = this.state;

    for (var key in todos) {
      if (todos[key]['id'] === id) {
        todos[key]['done'] = 1;
        console.log(todos);
      }
    }
    this.setState({
      todos: [...todos],
    });
  };
  takeDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    return dd + '.' + mm + '.' + '20' + yy;
  }

  render() {
    const { todos, taskTitle, timeToComplete } = this.state;
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
          <p>What are you working on?</p>
          <div className="top_functionals">
            <Clock
              className="clock"
              format={'HH:mm:ss'}
              ticking={true}
              timezone={'Europe/Kiev'}
            />
          </div>
        </div>
        <div className="main_statistic">
          <span>{this.takeDate(new Date())}</span>
          <div className="enter_form">
            <button className="clear_list" onClick={this.clearTodos}>
              Clear List
            </button>
            <input
              type="text"
              onChange={e => this.setState({ taskTitle: e.target.value })}
              value={taskTitle}
              placeholder="What needs to be done?"
              required
            />
            <input
              type="text"
              onChange={e => this.setState({ timeToComplete: e.target.value })}
              value={timeToComplete}
              placeholder="Time to complete, example( 1:30 )"
              required
            />
            <button className="add_to_todos" onClick={this.handleAddToTodos}>
              Add to Todos
            </button>
          </div>
        </div>
        <FullList
          todos={todos}
          removeFromTodos={this.removeFromTodos}
          completeTodos={this.completeTodos}
          listClassName={this.state.listClassName}
        />
      </div>
    );
  }
}

export default TogglMain;
