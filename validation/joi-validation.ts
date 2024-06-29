import Joi from 'joi';
import userModel from '../model/UserModel'
const { ObjectId } = require('mongoose').Types;

/**
 * Validation options for Joi
 */
const options = {
    abortEarly: false,
};

/**
 * Custom Joi method to validate ObjectId
 */
const objectIdMethod = (value: any, helpers: Joi.CustomHelpers) => {
    if (!ObjectId.isValid(value)) {
        return helpers.error('any.invalid');
    }
    return value;
};

/**
 * Custom Joi method to check if email already exists in database
 */
const checkIfEmailExists = async (value: string, helpers: Joi.CustomHelpers) => {
    const user = await userModel.findOne({ email: value });
    if (user) {
        return helpers.error('any.exists', { message: 'Email already exists' });
    }
    return value;
};

/**
 * Joi schema for validating user creation data
 */
const createUserSchema = Joi.object({
    name: Joi.string().optional(),
    age: Joi.number().optional(),
    city: Joi.string().optional(),
    email: Joi.string()
        .email()
        .required()
        .external(checkIfEmailExists)
        .messages({
            'string.base': `Email must be a type of string`,
            'any.required': `Email is required`,
            'string.empty': `Email is required`,
            'string.email': `Email must be a valid email address`,
            'any.exists': `Email already exists`,
        }),
    zipcode: Joi.number()
        .integer()
        .required()
        .messages({
            'number.base': `Zip Code must be a type of number`,
            'number.integer': `Zip Code must be an integer`,
            'any.required': `Zip Code is required`,
        }),
}).options(options);

const createUser = async (data: any) => {
    return createUserSchema.validateAsync(data, options);
};

export default {
    createUser,
};
