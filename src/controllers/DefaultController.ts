import { Request, Response } from 'express'

export class DefaultController {
  index (_: Request, res: Response) {
    return res.json({
      name: 'UNC Online Test API',
      version: '1.0.0'
    })
  }
}
