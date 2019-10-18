'use strict';
import express from 'express';
import axios from 'axios';
import { HeaderJWT } from '../helper/header';
const routeBarang = express.Router();

routeBarang.get('/barang', async (req, res) => {
  const JwtHead = await HeaderJWT(req);
  try {
    const response = await axios.get(process.env.URL_BARANG,JwtHead);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.data.status).json(error.response.data);
  }
});

routeBarang.post('/barang', async (req, res) => {
  try {
    const response = await axios({
      method: 'post',
      url: process.env.URL_BARANG,
      headers: { 'x-token-api':req.headers['x-token-api'] },
      data: req.body
    })
    res.json(response.data);
  } catch (error) {
    res.status(error.response.data.status).json(error.response.data);
  }
});

routeBarang.patch('/barang/:id', async (req, res) => {
  try {
    const response = await axios({
      method: 'patch',
      url: process.env.URL_BARANG+'/'+req.params.id,
      headers: { 'x-token-api':req.headers['x-token-api'] },
      data: req.body
    })
    res.json(response.data);
  } catch (error) {
    res.status(error.response.data.status).json(error.response.data);
  }
});

routeBarang.get('/barang/:id', async (req, res) => {
  const JwtHead = await HeaderJWT(req);
  try {
    const response = await axios.get(process.env.URL_BARANG+'/'+req.params.id,JwtHead);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.data.status).json(error.response.data);
  }
});

routeBarang.delete('/barang/:id', async (req, res) => {
  const JwtHead = await HeaderJWT(req);
  try {
    const response = await axios.delete(process.env.URL_BARANG+'/'+req.params.id,JwtHead);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.data.status).json(error.response.data);
  }
});

export default routeBarang
