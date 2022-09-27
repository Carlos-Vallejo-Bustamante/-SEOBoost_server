const router = require('express').Router();


const {
    getSearch,
} = require('../controller/result.controller');

router.post('/', getSearch);

module.exports = router;