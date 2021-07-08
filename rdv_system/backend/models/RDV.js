const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
let day = d.getDate();
if (day < 10) day = `0${day}`;
const dt = `${d.getFullYear()}-${month}-${day}`;


const rdvSchema = Schema({
    id_user: { type: Schema.Types.ObjectId, ref: 'User' },
    rdvDate: { type: String, default: dt },
    rdvHour: { type: String, require: true },
    rdvHonore: { type: Boolean, default: false },
})

module.exports = model('Rdv', rdvSchema)