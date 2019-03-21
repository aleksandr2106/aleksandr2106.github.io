import React, { Component } from 'react';
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as todoActions from '../../redux/actions/todo';
import FullList from '../FullList';
import Sidebar from '../Sidebar';
import './TogglMain.scss';
import './reset.css';

class TogglMain extends Component {
  state = {
    taskTitle: '',
    timeToComplete: '',
    timeSpend: '',
    todos: [],
    listClassName: 'list',
  };

  handleAddToTodos = () => {
    const { taskTitle, timeToComplete } = this.state;
    const { dispatch } = this.props;

    if (!taskTitle || !timeToComplete) {
      alert('Enter all the fields!');
      return;
    }

    dispatch(todoActions.addTodo(taskTitle, timeToComplete));

    this.setState({
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

  toggleResolved = id => {
    this.props.dispatch(todoActions.toggleResolved(id));
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
    const { taskTitle, timeToComplete } = this.state;
    const { todos } = this.props;

    return (
      <div className="body">
        <Sidebar />
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
          toggleResolved={this.toggleResolved}
          listClassName={this.state.listClassName}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TogglMain);
