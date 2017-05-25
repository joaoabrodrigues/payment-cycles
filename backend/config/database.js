const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "Field '{PATH}' is mandatory."
mongoose.Error.messages.Number.max = "Value '{VALUE}' is greater than maximum allowed ({MAX})."
mongoose.Error.messages.Number.min = "Value '{VALUE}' is smaller than minimum allowed ({MIN})."
mongoose.Error.messages.String.enum = "'{VALUE}' is not a valid {PATH}"
