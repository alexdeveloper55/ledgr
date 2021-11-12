require('dotenv').config({ path: '../.env' });
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(`postgres://${process.env.USER}:${process.env.PASSWORD}@localhost:5432/${process.env.DB_NAME}`)


// TEST THE DB CONNECTION USING THE CODE BELOW
// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }