import { NextFunction, Request, Response } from 'express'
import { AppError } from '../libs/app-error'
import { ZodError } from 'zod'

export function handleErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      status: 'error',
      message: err.message,
    })
  }

  if (err instanceof ZodError) {
    return res.status(422).json({
      status: 'error',
      message: err.errors,
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
}
