const router = require("express").Router();

const {
    getAll,
    getOne,
    updateOne,
    deleteOne,
    addFavorite,
    removeFavorite
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
router.put('/addaudit/:id', addFavorite);
router.put('/removeaudit/:id', removeFavorite);

/**
 * DELETE
 */
router.delete('/:id', deleteOne);



module.exports = router;