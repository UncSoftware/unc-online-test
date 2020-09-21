import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('customer', function (table) {
    table.uuid('id')
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('phone').notNullable()
    table.string('birthDate').notNullable()
    table.string('postalCode')
    table.string('streetName')
    table.string('neighborhood')
    table.string('city')
    table.string('state')
    table.timestamp('createdAt')
    table.timestamp('updatedAt')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('customer')
}
