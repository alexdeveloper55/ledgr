const express = require('express');
const router = express.Router();
const dbReqs = require('./controllers/controller');

router.get('/snapshots', dbReqs.getAllSnapshots);

module.exports = router;