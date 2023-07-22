import Joi, {date} from "joi";

const CarValidator = Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'The brand should consist only of letters. Min 1, Max 20 characters.',
        'string.empty':'Fill in the brand field.'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'The min number is 0.',
        'number.max':'The max number is 1000000.',
        'number.base':'Fill in the price field.'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'The min year is 1990.',
        'number.max':`The max year is ${new Date().getFullYear()}.`,
        'number.base':'Fill in the year field.'
    })
})

export {CarValidator}