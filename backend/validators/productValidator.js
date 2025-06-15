const Joi = require('joi');

const productSchema = Joi.object({   
    title:Joi.string()
        .min(5)
        .max(200)
        .required()
        .messages({
            'string.base':'Title must be string',
            'string.empty': 'Please add title of your product',
            'string.min':'Title must be greater than 5 characters',
            'string.max':'Tile must be less than 200 characters',
            'any.required': 'Please add title of your product'
        }),
    category:Joi.string()
        .empty()
        .valid('electronics', 'books', 'fashion', 'home')
        .required()
        .messages({
            'any.only': 'Category must be one of electronics, books, fashion, or home',
            'any.required': 'Please select the category of the product',
        }),  
    mrp:Joi.number()
        .min(0)
        .required()
        .messages({
            'number.base':'MRP must be a number',
            'number.min': 'MRP cannot be negative',
            'any.required': 'Please add mrp of your product'
        }),
    sellingPrice:Joi.number()
        .min(0)
        .required()
        .messages({
            'number.base':'Selling price must be a number',
            'number.positive': 'Selling price must be a positive number',
            'any.required': 'Please add selling price',
        }),
    summary:Joi.string().optional(),
    rating: Joi.number().min(0).max(5).optional(),
    reviewsCount: Joi.number().min(0).optional(),
    altText: Joi.string().optional()   
})

module.exports = { productSchema }