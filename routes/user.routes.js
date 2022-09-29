const router = require("express").Router();

const {
    getAll,
    getOne,
    updateOne,
    deleteOne,
} = require('../controller/user.controller');


/**
 * GET
 */
router.get('/users', getAll);
router.get('/:id', getOne);

/**
 * POST
 */


/**
 * PUT
 */
router.put('/:id', updateOne);

/**
 * DELETE
 */
router.delete('/:id', deleteOne);



module.exports = router;