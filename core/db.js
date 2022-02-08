const Sequelize = require('sequelize')
const {
  dbname, 
  host,
  port,
  user, 
  password
} = require('../config/config').database

const sequelize = new Sequelize(dbname, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {

  }
})

module.exports = {
  sequelize
}