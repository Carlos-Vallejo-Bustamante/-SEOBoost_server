const router = require('express').Router();


const {
    getAll,
} = require('../controller/seller.controller');
/**
 * GET
 */
router.post('/', getAll);


module.exports = router;
