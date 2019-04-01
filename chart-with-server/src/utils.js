import React from "react";
import axios from "axios";

export function getData() {
  return axios
    .get(`http://localhost:3000/random`)
    .then(({ data }) => data.number);
}
