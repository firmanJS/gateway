'use strict';
import express from 'express'
import user from '../routes/UserRoutes'
import barang from '../routes/BarangRoutes'
const routing = express()

routing.use(user);
routing.use(barang);
export default routing;