require('dotenv').config();
const { db } = require('./config/config')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const adminRoute = require('./routes/adminRoute')

db(mongoose)
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())


app.use('/api/', adminRoute)
module.exports = app;