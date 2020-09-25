import Joi, { Schema } from 'joi'

export class CustomerValidation {
  index (): Schema {
    return Joi.object({
      params: Joi.object({
        id: Joi.string().uuid().optional()
      })
    })
  }

  create (): Schema {
    return Joi.object({
      body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
        birthDate: Joi.string().required(),
        postalCode: Joi.string().optional(),
        streetName: Joi.string().optional(),
        neighborhood: Joi.string().optional(),
        city: Joi.string().optional(),
        state: Joi.string().optional()
      })
    })
  }

  update (): Schema {
    return Joi.object({
      body: Joi.object({
        id: Joi.string().uuid().required(),
        name: Joi.string().optional(),
        email: Joi.string().optional(),
        phone: Joi.string().optional(),
        birthDate: Joi.string().optional(),
        postalCode: Joi.string().optional(),
        streetName: Joi.string().optional(),
        neighborhood: Joi.string().optional(),
        city: Joi.string().optional(),
        state: Joi.string().optional()
      })
    })
  }

  delete (): Schema {
    return Joi.object({
      params: Joi.object({
        id: Joi.string().uuid().optional()
      })
    })
  }
}
