//hapi/joi validations
const Joi = require("@hapi/joi");

const registerValidation = (data) =>{
    const schema = {
        name:Joi.string()
            .min(6)
            .required(),
        email:Joi.string()
            .min(6)
            .required(),
        password:Joi.string()
            .min(6)
            .required()
    }

    return Joi.validate(data)
}

const loginValidation =data =>{
    const schema = {
        email:Joi.string()
            .min(6)
            .required(),
        password:Joi.string()
            .min(6)
            .required()
    }

    return schema.validate(data)
}

module.exports.loginValidation = loginValidation;
module.exports.schema = schema;
module.exports.registerValidation = registerValidation;
