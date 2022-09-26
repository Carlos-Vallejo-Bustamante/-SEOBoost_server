const router = require('express').Router();

const {
    getAll,
} = require('../controller/seller.controller');
/**
 * GET
 */
router.get('/', getAll);

module.exports = router;
