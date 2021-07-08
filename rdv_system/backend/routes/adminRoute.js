const express = require('express');
const route = express.Router()
const { planing, rdv, getPlaning } = require('../controllers/adminController')

route.post('/planing', planing);
route.get('/getplaning', getPlaning)
route.post('/rendezvous', rdv)

module.exports = route;