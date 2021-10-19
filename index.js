'use strict';

const express = require('express');
const cors = require('cors');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
global.MY_MEMO = {};

// App
const app = express();
const requestRoutes = require('./routes/requests');

// Middleware
app.use(express.json())
app.use(cors());
app.use('/', requestRoutes)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);