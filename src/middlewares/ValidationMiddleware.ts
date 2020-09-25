import { NextFunction, Request, Response } from 'express'
import { Schema } from 'joi'

export const ValidationMiddleware = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req, { abortEarly: false, allowUnknown: true })
    const isValid = error == null

    if (isValid) {
      next()
    } else {
      return res.status(400).json({
        details: error.details,
        message: error.message
      })
    }
  }
}
