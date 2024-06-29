"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const UserModel_1 = tslib_1.__importDefault(require("../model/UserModel"));
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
const objectIdMethod = (value, helpers) => {
    if (!ObjectId.isValid(value)) {
        return helpers.error('any.invalid');
    }
    return value;
};
/**
 * Custom Joi method to check if email already exists in database
 */
const checkIfEmailExists = async (value, helpers) => {
    const user = await UserModel_1.default.findOne({ email: value });
    if (user) {
        return helpers.error('any.exists', { message: 'Email already exists' });
    }
    return value;
};
/**
 * Joi schema for validating user creation data
 */
const createUserSchema = joi_1.default.object({
    name: joi_1.default.string().optional(),
    age: joi_1.default.number().optional(),
    city: joi_1.default.string().optional(),
    email: joi_1.default.string()
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
    zipcode: joi_1.default.number()
        .integer()
        .required()
        .messages({
        'number.base': `Zip Code must be a type of number`,
        'number.integer': `Zip Code must be an integer`,
        'any.required': `Zip Code is required`,
    }),
}).options(options);
const createUser = async (data) => {
    return createUserSchema.validateAsync(data, options);
};
exports.default = {
    createUser,
};
//# sourceMappingURL=joi-validation.js.map