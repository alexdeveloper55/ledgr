const express = require('express');
const router = express.Router();
const dbReqs = require('./controllers/controller');

router.get('/snapshots', dbReqs.getAllSnapshots);
router.get('/users', dbReqs.getAllUsers);
router.get('/user/:id', dbReqs.getUserById)

router.post('/users', dbReqs.postUser);


module.exports = router;