const paymentCycle = require('./paymentCycle')
const _ = require('lodash')

paymentCycle.methods(['get', 'post', 'put', 'delete'])
paymentCycle.updateOptions({ new: true, runValidators: true })

paymentCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if (bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

paymentCycle.route('count', function(req, res, next) {
  paymentCycle.count({ userEmail: req.headers['useremail']}, function(error, value) {
    if (error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({ value })
    }
  })
})

paymentCycle.route('getByUser', function(req, res, next) {
  var query = paymentCycle.find({ userEmail: req.headers['useremail'] }).select()
  query.exec(function (error, value){
    if (error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json(value)
    }
  })
})

module.exports = paymentCycle
