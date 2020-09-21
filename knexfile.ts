export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/migrations',
      extension: 'ts'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      database: process.env.DATABASE_URL,
      user: process.env.USER,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/migrations',
      extension: 'ts'
    }
  }
}
