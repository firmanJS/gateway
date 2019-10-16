'use strict';
import express from 'express';
import axios from 'axios';
const routeBarang = express.Router();

routeBarang.get('/barang', async (req, res) => {
  const token = req.headers['x-token-api'];
  let configAuth = { headers: { 'x-token-api':token } };
  const permission = {
    'menu':'berita',
    'access':{
      'view':false,
      'edit':false,
      'save':false,
      'delete':false,
  }
}
const options = {
  maxAge: 1000 * 60 * 180,
  httpOnly: true, secure: req.app.get('env') === 'development' ? false : true, 
}
res.cookie('permission', permission,options)
  try {
    const response = await axios.get(process.env.URL_BARANG,configAuth);
    res.json(response.data);
    console.log(req.cookies.permission.access.view);
  } catch (error) {
    res.json(error);
  }
});

export default routeBarang
