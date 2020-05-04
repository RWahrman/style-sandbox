const Sequelize = require('sequelize')
const db = require('../db')

const Font = db.define('font', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  ranking: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Font
