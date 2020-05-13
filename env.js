const { env } = process
const variables = {
  development: {
    baseURL: 'http://localhost:8080/api',
    port: 4000
  },
  production: {
    baseURL: 'https://api.server.com',
    port: 4000
  }
}
module.exports = variables[env.NODE_ENV] || variables.development
