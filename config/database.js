const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://develop:gLUFZfAQt08UNQWO@cluster0-shard-00-00-kuksm.mongodb.net:27017,cluster0-shard-00-01-kuksm.mongodb.net:27017,cluster0-shard-00-02-kuksm.mongodb.net:27017/db_finance?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

mongoose.Error.messages.general.required = "Field '{PATH}' is mandatory."
mongoose.Error.messages.Number.max = "Value '{VALUE}' is greater than maximum allowed ({MAX})."
mongoose.Error.messages.Number.min = "Value '{VALUE}' is smaller than minimum allowed ({MIN})."
mongoose.Error.messages.String.enum = "'{VALUE}' is not a valid {PATH}"