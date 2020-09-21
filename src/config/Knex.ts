import KnexFile from '../../knexFile'
import Knex from 'knex'

const knexConfig = KnexFile[process.env.NODE_ENV]
export default Knex(knexConfig)
