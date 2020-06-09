module.exports = {
  api: {
    port: process.env.API_PORT || 4200,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
  }
}