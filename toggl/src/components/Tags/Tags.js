import React, { Component } from 'react';
import './Tags.scss';
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Spinner from '../Spinner';
let time = new Date().toLocaleString();
class Tags extends Component {
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
      <div className="body">
        <Sidebar />
        <div className="top_part_of_functionals">
          <p>Tags</p>
          <div className="top_functionals">
            <Clock
              className="clock"
              format={'HH:mm:ss'}
              ticking={true}
              timezone={'Europe/Kiev'}
            />
          </div>
        </div>
        <div className="select_dashboard">
          <span>{this.takeDate(new Date())}</span>
        </div>
        <Spinner />
      </div>
    );
  }
}

export default Tags;
