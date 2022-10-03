const router = require('express').Router();


const {
    getKeywords
} = require('../controller/keyword.controller');

router.post('/', getKeywords);

module.exports = router;