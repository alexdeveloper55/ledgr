'use strict'

const { Asset_snapshot } = require('../models/model');
const db = require('../models/model');

const getActiveClassesById = (req, res) => {
  console.log("get active classes by id request");
  try {
    db.Asset_type.findAll({
      where: {
        '$Asset_snapshot.active$': true
      },
      include: [{
        model: Asset_snapshot,
        required: true,
        as: 'Asset_snapshot'
      }]
    })
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

const getActiveSnapshotsById = (req, res) => {
  console.log("get active snapshots by id request");
  try {
    db.Asset_snapshot.findAll({
      where: {
        user_id: req.params.id,
        active: true
      }
    })
      .then(snapshots => res.send(snapshots));
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

const getAllUsers = (req, res) => {
  console.log("get all users request");
  try {
    db.User.findAll()
      .then(users => res.send(users));
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

const getUserById = (req, res) => {
  console.log("get user by id request");
  try {
    db.User.findAll({
      where: {
        id : req.params.id
      }
    })
      .then(user => res.send(user[0]));
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

const postUser = (req, res) => {
  console.log("post user request");
  console.log(req.body);
  try {
    db.User.create(req.body)
      .then(user => res.send(user))
      .then(x => res.status(200));
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

module.exports = {
  getActiveSnapshotsById,
  getAllUsers,
  postUser,
  getUserById,
  getActiveClassesById
}