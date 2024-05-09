import * as Joi from 'joi';

export const requestBodySchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(6).max(20).required().messages({
    'string.min': 'Password must be at least 6 characters',
    'string.max': 'Password must be at most 20 characters',
    'any.required': 'Password is required',
  }),
});