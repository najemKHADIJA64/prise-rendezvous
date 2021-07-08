const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = Schema({
    firstName: { type: String, min: 4, max: 40, require: true },
    lastName: { type: String, min: 4, max: 40, require: true },
    email: { type: String, require: true },
    phone: { type: Number, min: 10, require: true },
    CIN: { type: String, min: 6, max: 10, require: true },
    role: { type: String, ennum: ['user', 'admin'], default: 'user' }
})

module.exports = model('User', userSchema)