import React, { Component } from 'react';
import './Reports.scss';
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';
let time = new Date().toLocaleString();
class Reports extends Component {
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
    return (
      <div>
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
            <div className="menu_single_elements">
              <i className="far fa-question-circle" />
              <p>Help</p>
            </div>
          </div>
        </div>
        <div className="top_part_of_functionals">
          <p>Check your statistics here!</p>
          <div className="top_functionals">
            <Clock
              className="clock"
              format={'HH:mm:ss'}
              ticking={true}
              timezone={'UA/Pacific'}
            />
          </div>
        </div>
        <div className="select_reports">
          <span>{this.takeDate(new Date())}</span>
        </div>
      </div>
    );
  }
}

export default Reports;
