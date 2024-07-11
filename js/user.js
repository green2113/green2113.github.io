const mongoose = require('mongoose');

const user = mongoose.Schema({
    email: String,
    text: String,
})

module.exports = mongoose.model('test', user);