import React, { PureComponent } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class Charts extends PureComponent {
  state = {
    data: []
  };

  componentDidMount() {
    setInterval(() => {
      const { data: list } = this.state;
      return axios.get(`http://localhost:3000/random`).then(({ data }) => {
        this.setState({
          data: [...list, { id: list.length + 1, number: data.number }]
        });
      });
    }, 1000);
  }

  render() {
    const { data } = this.state;

    return (
      <LineChart
        width={500}
        height={300}
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
    );
  }
}
