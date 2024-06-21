import Joi from 'joi'
import mongoose from 'mongoose';
import userModel from '../model/usermodel';

const { ObjectId } = mongoose.Types;

/**
 * validating options for Joi
 */
const options = {
    abortEarly: false,
};

const method = (value: any, helpers: Joi.CustomHelpers) => {
    if (!ObjectId.isValid(value)) {
        return helpers.error('any.invalid');
    }
    return value;
};

const checkIfEmailExists = async (value: string, helpers: Joi.CustomHelpers) => {
    const user = await userModel.findOne({ email: value });
    if (user) {
        return helpers.error('any.exists', { message: 'Email already exists' });
    }
    return value;
};

const createUserSchema = Joi.object()
    .keys({
        firstName: Joi.string()
            .empty()
            .required()
            .min(3)
            .max(150)
            .messages({
                'string.base': `firstName must be a type of string`,
                'string.empty': `firstName is required`,
                'string.min': `firstName must have minimum of {#limit} characters`,
                'string.max': `firstName can have maximum of {#limit} characters`,
                'any.required': `firstName is required`,
                'any.optional': `firstName is optional`,
                'any.exists': `firstName already exists`,
            }),
        email: Joi.string()
            .email()
            .external(checkIfEmailExists)
            .required()
            .messages({
                'string.base': `Email must be a type of string`,
                'any.required': `Email is required`,
                'any.exists': `Email already exists`,
            }),
        lastName: Joi.string()
            .empty()
            .required()
            .messages({
                'string.base': `Email must be a type of string`,
                'string.empty': `Email is required`,
                'string.email': `Email must be a valid email`,
                'any.required': `Email is required`,
                'any.exists': `Email already exists`,
            }),
        password: Joi.string()
            .empty()
            .required()
            .external(checkIfEmailExists)
            .messages({
                'string.base': `Email must be a type of string`,
                'string.empty': `Email is required`,
                'any.required': `Email is required`,
                'any.exists': `Email already exists`,
            }),
        mobileNumber: Joi.string()
            .empty()
            .required()
            .external(checkIfEmailExists)
            .messages({
                'string.base': `Email must be a type of string`,
                'string.empty': `Email is required`,
                'string.email': `Email must be a valid email`,
                'any.required': `Email is required`,
                'any.exists': `Email already exists`,
            }),
    });

const createUser = async (data: any) => {
    return createUserSchema.validateAsync(data, options);
};

export default { createUser };
