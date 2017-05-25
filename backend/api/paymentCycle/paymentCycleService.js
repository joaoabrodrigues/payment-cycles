const paymentCycle = require('./paymentCycle')

paymentCycle.methods(['get', 'post', 'put', 'delete'])
paymentCycle.updateOptions({ new: true, runValidators: true })

paymentCycle.route('count', function(req, res, next) {
  paymentCycle.count(function(error, value) {
    if (error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({ value })
    }
  })
})

module.exports = paymentCycle
