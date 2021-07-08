const Planing = require('../models/Planing')
const { planingValidation } = require('../validation/validation')
const RDV = require('../models/RDV');
const User = require('../models/User');

exports.planing = async (req, res) => {
    const { error } = planingValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    try {
        const planing = new Planing({ ...req.body })
        const saved = await planing.save();
        if (saved) return res.status(201).json(planing)
    } catch (error) {
        throw Error(error)
    }

}

exports.getPlaning = async (req, res) => {
    try {
        const planing = await Planing.findOne().sort({ _id: -1 }).limit(-1)
        if (planing) return res.status(200).json(planing)
    } catch (error) {
        throw Error(error)
    }
}

exports.rdv = async (req, res) => {
    const { firstName, lastName, email, phone, CIN, rdvHour } = req.body
    const user = new User({
        firstName,
        lastName,
        email,
        phone,
        CIN,
    })
    const rdv = new RDV({
        id_user: user._id,
        rdvHour
    })
    try {
        const saveUser = await user.save();
        const saveRdv = await rdv.save();
        if (saveUser && saveRdv) return res.status(201).json(user + rdv)

    } catch (error) {
        throw Error(error)
    }

}