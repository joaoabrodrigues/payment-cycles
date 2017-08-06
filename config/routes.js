const express = require('express')
const auth = require('./auth')

module.exports = function (server) {
  const openApi = express.Router()
  server.use('/oapi', openApi)

  const AuthService = require('../api/user/authService')
  openApi.post('/login', AuthService.login)
  openApi.post('/signup', AuthService.signup)
  openApi.post('/validateToken', AuthService.validateToken)

 /*
  * Protected routes by JWT token
  */
  const protectedApi = express.Router()
  server.use('/api/v1', protectedApi)
  protectedApi.use(auth)

  //API Routes
  const paymentCycleService = require('../api/paymentCycle/paymentCycleService')
  paymentCycleService.register(protectedApi, '/paymentCycles')

  const paymentSummaryService = require('../api/paymentSummary/paymentSummaryService')
  protectedApi.route('/paymentSummary').get(paymentSummaryService.getSummary)
}
