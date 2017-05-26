const paymentCycle = require('./paymentCycle')
const _ = require('lodash')

paymentCycle.methods(['get', 'post', 'put', 'delete'])
paymentCycle.updateOptions({ new: true, runValidators: true })

paymentCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if (bundle.errors) {
    var errors = parseErros(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErros(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

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
