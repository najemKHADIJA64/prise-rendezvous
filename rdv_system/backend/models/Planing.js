const mongoose = require('mongoose');
const {Schema, model} = mongoose;
// const {dateFormat} = require('../config/config')
const d = new Date();
    let month = d.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    let day = d.getDate();
    if (day < 10) day = `0${day}`;
    const dt = `${d.getFullYear()}-${month}-${day}`; 

const planingSchema = Schema({
    id_user:{type: Schema.Types.ObjectId, ref: 'User'},
    totalRDV:{type: Number, require:true},
    dateStart:{type: String, default:dt},
    dateEnd:{type: String,  default:dt},
})

module.exports = model('Planing', planingSchema)