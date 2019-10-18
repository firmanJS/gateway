'use strict';
import express from 'express';
import axios from 'axios';
import Route from '../config/route';
import { HeaderJWT } from '../helper/header';
const routeUser = express.Router();
const listEndpoints = require('express-list-endpoints')

routeUser.post('/', async (req, res) => {
  const input = req.body;
  const tes = await axios({
    method: 'post',
    url: process.env.URL_USER,
    data: req.body
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

routeUser.get('/getrole', async (req, res) => {
  const JwtHead = await HeaderJWT(req);
  try {
    const response = await axios.get(process.env.URL_USER+'/decode',JwtHead);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.data.status).json(error.response.data);
  }
});

export default routeUser
