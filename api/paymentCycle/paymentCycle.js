const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Credit name is required'] },
  value: { type: Number, min: 0, required: [true, 'Credit value is required'] },
  date: { type: Date, required: [true, 'Credit date is required'] }
})

const debtSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Debt name is required'] },
  value: { type: Number, min: 0, required: [true, 'Debt value is required'] },
  status: { type: String, required: false, uppercase: true,
    enum: ['PAGO', 'PENDENTE', 'AGENDADO']
  },
  date: { type: Date, required: [true, 'Debt date is required'] }
})

const paymentCycleSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Month name is required'] },
  month: { type: Number, min: 1, max: 12, required: [true, 'Month number is required'] },
  year: { type: Number, min: 1970, max: 2100, required: [true, 'Year is required'] },
  userEmail: { type: String, required: true },
  credits: [creditSchema],
  debts: [debtSchema]
})

module.exports = restful.model('PaymentCycle', paymentCycleSchema)
