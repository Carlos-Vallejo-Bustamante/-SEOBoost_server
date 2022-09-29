const router = require('express').Router();
const { GetUser } = require('../controller/profile.controller');

router.get('/', GetUser)

module.exports = router;