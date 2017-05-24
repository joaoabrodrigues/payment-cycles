const express = require('express')

module.exports = function(server){
  //Default URI
  const router = express.Router()
  server.use('/v1/api', router)

  //API Routes
  const paymentCycleService = require('../api/paymentCycle/paymentCycleService')
  paymentCycleService.register(router, '/paymentCycles')
}
