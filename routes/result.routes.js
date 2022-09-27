const router = require('express').Router();


const {
    getSearch,
} = require('../controller/seller.controller');

router.post('/', getSearch);

module.exports = router;