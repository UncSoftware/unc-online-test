import express from 'express'

import { ValidationMiddleware } from '@middlewares/ValidationMiddleware'
import { CustomerController } from '@controllers/CustomerController'
import { CustomerValidation } from '@validation/CustomerValidation'

const router = express.Router()
const customerController = new CustomerController()
const customerValidation = new CustomerValidation()

router.get(
  '/customer/:id?',
  ValidationMiddleware(customerValidation.index()),
  customerController.index
)

router.post(
  '/customer',
  ValidationMiddleware(customerValidation.create()),
  customerController.create
)

router.patch(
  '/customer',
  ValidationMiddleware(customerValidation.update()),
  customerController.update
)

router.delete(
  '/customer/:id',
  ValidationMiddleware(customerValidation.delete()),
  customerController.delete
)

export default router
