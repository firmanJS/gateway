'use strict';
import express from 'express';
import axios from 'axios';
import Route from '../config/route';
const routeUser = express.Router();
const listEndpoints = require('express-list-endpoints')

routeUser.post('/', async (req, res) => {
  const input = req.body;
  const tes = await axios({
    method: 'post',
    url: process.env.URL_USER+'/setToken',
    data: {
      username: input.username,
      password: input.password
    }
  })
  res.json(tes.data);
});

routeUser.get('/', (req, res) => {
  const list = listEndpoints(Route);
  const NewParam = {
    'port and url auth': process.env.URL_USER,
    'port and url barang': process.env.URL_BARANG
  };
  list.push(NewParam)
  res.json({'msg':"yeay api gateway it's working","endpoints":list})
});

export default routeUser
