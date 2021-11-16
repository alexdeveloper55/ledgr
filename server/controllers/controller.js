'use strict'

const { Asset_snapshot } = require('../models/model');
const db = require('../models/model');

const getActiveDetailsById = (req, res) => {
  console.log("get active classes by id request");
  try {
    db.Asset_type.findAll({
      where: {
        '$Asset_snapshots.user_id$': req.params.id,
        '$Asset_snapshots.active$': true
      },
      include: [{
        model: Asset_snapshot,
        required: true
      }]
    })
      .then(classes => res.send(classes));
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
  try {
    db.User.create(req.body)
      .then(user => res.send(user))
      .then(x => res.status(200));
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

const postNewSnapshot = async (req, res) => {
  console.log("post new snapshot");
  try {
    let asset = await db.Asset_type.findAll({
      where : {
        class: req.body.newClass,
        name: req.body.newAsset
      }
    })
    if (!asset.length) {
      asset = [await db.Asset_type.create({
        class: req.body.newClass,
        name: req.body.newAsset
      })]
    }
    const snapshot = await db.Asset_snapshot.create({
      date: Date.now(),
      price: req.body.newAssetPrice,
      asset_id: asset[0].id,
      amount_owned: req.body.newAmountOwned,
      active: true,
      user_id: req.body.userId
    })
    res.send(snapshot);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

const toggleSnapshotOff = async (req, res) => {
  console.log("toggle snapshot off request")
  try {
    const snapshot = await Asset_snapshot.update({active: false}, {
      where: {
        id: req.params.id
      }
    })
    console.log(snapshot)
    res.send(snapshot)
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
  getActiveDetailsById,
  postNewSnapshot,
  toggleSnapshotOff
}