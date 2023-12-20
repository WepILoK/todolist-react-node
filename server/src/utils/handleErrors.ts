import {validationResult} from "express-validator";

export default {
    validationError(req: any, res: any, next: any) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: "error",
                message: errors.array()[0].msg
            })
        }
        next()
    },
    badRequest(res: any, errors?: any) {
        return res.status(400).json({
            status: "error",
            message: errors.array()[0].msg ||  "bad_request"
        })
    },
}