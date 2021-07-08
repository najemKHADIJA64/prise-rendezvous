const Joi = require('joi');

exports.planingValidation = data=>{

    const schema = Joi.object({

    totalRDV: Joi.number().required(),
    dateStart: Joi.string().required(),
    dateEnd: Joi.string().required(),
    
})
    return schema.validate(data)
}