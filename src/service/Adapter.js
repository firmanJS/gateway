'use strict';
import axios from 'axios';
module.exports = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
  });
}