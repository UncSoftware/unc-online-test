import express from 'express'

import { CustomerController } from '@controllers/CustomerController'

const router = express.Router()
const customerController = new CustomerController()

router.get('/customer/:id', customerController.index)
router.patch('/customer', customerController.update)
router.post('/customer', customerController.create)
router.delete('/customer/:id', customerController.delete)

export default router
