import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

class Dashboard extends Component {
  render() {
    return (
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
    );
  }
}

export default Dashboard;
