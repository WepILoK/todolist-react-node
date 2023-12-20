import {body} from "express-validator"

export const todoValidator = [
    body('title', "todo.title.required")
        .isString()
        .isLength({min: 10, max: 400})
        .withMessage('min: 10, max: 400'),
]