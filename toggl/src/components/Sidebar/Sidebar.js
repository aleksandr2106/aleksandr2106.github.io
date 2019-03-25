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
          <Link to={`/insights`} className="menu_single_elements">
            <i className="fas fa-chart-line" />
            <p>Insights</p>
          </Link>
          <Link to={`/saved-reports`} className="menu_single_elements">
            <i className="far fa-star" />
            <p>Saved Reports</p>
          </Link>
        </div>
        <div className="manage_menu">
          <h6>Manage</h6>
          <Link to={`/projects`} className="menu_single_elements">
            <i className="far fa-folder" />
            <p>Projects</p>
          </Link>
          <Link to={`/clients`} className="menu_single_elements">
            <i className="fas fa-user" />
            <p>Clients</p>
          </Link>
          <Link to={`/team`} className="menu_single_elements">
            <i className="fas fa-users" />
            <p>Team</p>
          </Link>
          <Link to={`/workspaces`} className="menu_single_elements">
            <i className="fas fa-briefcase" />
            <p>Workspaces</p>
          </Link>
          <Link to={`/tags`} className="menu_single_elements">
            <i className="fas fa-tag" />
            <p>Tags</p>
          </Link>
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
