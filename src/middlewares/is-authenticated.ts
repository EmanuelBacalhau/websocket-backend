import { NextFunction, Request, Response } from 'express'
import { AppError } from '../libs/app-error'
import { verify } from 'jsonwebtoken'
import { JWT_SECRET } from '../environments'

type Payload = {
  id: string
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const jsonWebToken = req.headers.authorization

  if (!jsonWebToken) {
    throw new AppError('Token not provided', 401)
  }

  const [, token] = jsonWebToken.split(' ')

  if (!verify(token, JWT_SECRET)) {
    throw new AppError('Invalid token', 401)
  }

  const { id } = verify(token, JWT_SECRET) as Payload

  req.userId = id

  return next()
}
