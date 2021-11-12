require('dotenv').config({ path: '../.env' });
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(`postgres://${process.env.USER}:${process.env.PASSWORD}@localhost:5432/${process.env.DB_NAME}`)

module.exports = { sequelize };
