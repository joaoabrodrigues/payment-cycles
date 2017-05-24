const paymentCycle = require('./paymentCycle')

paymentCycle.methods(['get', 'post', 'put', 'delete'])
paymentCycle.updateOptions({ new: true, runValidators: true })

module.exports = paymentCycle
