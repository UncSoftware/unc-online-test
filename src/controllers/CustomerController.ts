import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { knex } from '../config'

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  postalCode?: string;
  streetName?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  createdAt: string;
  updatedAt: string;
}

export class CustomerController {
  async index (req: Request, res: Response) {
    try {
      const id: string = req.params.id

      if (id) {
        const [customer] = await knex.select('*').from('customer').where('id', id)
        return res.status(200).json(customer)
      } else {
        const customers = await knex.select('*').from('customer')
        return res.status(200).json(customers)
      }
    } catch (e) {
      return res.status(500).send()
    }
  }

  async create (req: Request, res: Response<Customer>) {
    try {
      const now = new Date().getTime().toString()

      const customer: Customer = req.body
      customer.id = uuidv4()
      customer.createdAt = now
      customer.updatedAt = now

      await knex('customer').insert(customer)
      return res.status(200).json(customer)
    } catch (e) {
      return res.status(500).send()
    }
  }

  async update (req: Request, res: Response<Customer>) {
    try {
      const customer: Customer = req.body
      customer.updatedAt = new Date().getTime().toString()
      await knex('customer').where('id', customer.id).update(customer)
      return res.status(200).json(customer)
    } catch (e) {
      return res.status(500).send()
    }
  }

  async delete (req: Request, res: Response<Customer>) {
    try {
      const id: string = req.params.id
      await knex('customer').where('id', id).delete()
      return res.status(201).send()
    } catch (e) {
      return res.status(500).send()
    }
  }
}
