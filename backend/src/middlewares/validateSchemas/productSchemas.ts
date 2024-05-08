import * as Joi from "joi";

/**
 * Request body schema
 */
export const requestBodySchema = Joi.object({
  name: Joi.string().max(50).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.max": "Name must have a maximum length of 50 characters",
    "any.required": "Name is required",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number",
    "any.required": "Price is required",
  }),
  priceId: Joi.string().required().messages({
    "string.base": "Price ID must be a string",
    "string.empty": "Price ID cannot be empty",
    "any.required": "Price ID is required",
  }),
  quantity: Joi.number().required().messages({
    "number.base": "Quantity must be a number",
    "any.required": "Quantity is required",
  }),
  image: Joi.string().uri().messages({
    "string.base": "Image must be a string",
    "string.uri": "Image must be a valid URL",
  }),
});

/**
 * Request params schema
 */
export const requestParamsSchema = Joi.object({
  id: Joi.number().required().messages({
    "number.base": "ID must be a number",
    "any.required": "ID is required",
  }),
});

/**
 * Update request body schema
 */
export const updateRequestBodySchema = Joi.object({
  name: Joi.string().max(50).messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.max": "Name must have a maximum length of 50 characters",
  }),
  price: Joi.number().messages({
    "number.base": "Price must be a number",
  }),
  priceId: Joi.string().messages({
    "string.base": "Price ID must be a string",
    "string.empty": "Price ID cannot be empty",
  }),
  quantity: Joi.number().min(0).max(10000).messages({
    "number.base": "Quantity must be a number",
    "number.min": "Quantity must be greater than or equal to 0",
    "number.max": "Quantity must be less than or equal to 10000",
  }),
  image: Joi.string().uri().messages({
    "string.base": "Image must be a string",
    "string.uri": "Image must be a valid URL",
  }),
});