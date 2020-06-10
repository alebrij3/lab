module.exports = {
  api: {
    port: process.env.API_PORT || 4200,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'db4free.net',
    user: process.env.MYSQL_USER || 'test_user12',
    password: process.env.MYSQL_PASS || 'u8F2:3CObWo`wVgS',
    database: process.env.MYSQL_DB || 'test_database12',
  },
}
