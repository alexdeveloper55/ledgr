const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("./index");

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
   },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Asset_type = sequelize.define('Asset_type', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Asset_snapshot = sequelize.define('Asset_snapshot', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  amount_owned: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
})

User.hasMany(Asset_snapshot, {
  foreignKey: 'user_id'
});

Asset_type.hasMany(Asset_snapshot, {
  foreignKey: 'asset_id'
});

sequelize.sync();
console.log("All models were synchronized successfully.");

const db = { User, Asset_type, Asset_snapshot }

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;