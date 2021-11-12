'use strict'

const db = require('../models/model');


const getAllSnapshots = (req, res) => {
  console.log("get all snapshots request")
  try{
    const snapshots = db.Asset_snapshot.findAll();
    // const snapshots = await db.Asset_snapshot.findAll();
    res.send(snapshots);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}

module.exports = {
  getAllSnapshots
}