import React, { PureComponent } from "react";
import axios from "axios";
import "./Charts.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import { getData } from "../../utils.js";
export default class Charts extends PureComponent {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchUpdates();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  fetchUpdates = () => {
    const { data: list } = this.state;

    getData()
      .then(number => {
        this.setState({
          error: null,
          data: [...list, { id: list.length + 1, number }]
        });
        this.timer = setTimeout(() => this.fetchUpdates(), 1000);
      })
      .catch(() => {
        this.setState({ error: "Oops! Something went wrong!!!" });
      });
  };

  render() {
    const { data, error } = this.state;

    return error !== null ? (
      <div className="error">
        <p>{error}</p>
        <button onClick={() => this.fetchUpdates()}>Try again</button>
      </div>
    ) : (
      <div className="charts">
        <h2>Real Time Charts</h2>
        <LineChart
          width={1000}
          height={600}
          data={data.slice(-15)}
          margin={{
            top: 55,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="number"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    );
  }
}
