const router = require("express").Router();
const multerMiddleware = require('../middleware/multer.middleware')


const {
    getAll,
    getOne,
    updateOne,
    deleteOne,
    addFavorite,
    removeFavorite,
    getAvatar
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
router.put('/avatar/:id', multerMiddleware.single('avatar'), getAvatar);
router.put('/addaudit/:id', addFavorite);
router.put('/removeaudit/:id', removeFavorite);

/**
 * DELETE
 */
router.delete('/:id', deleteOne);



module.exports = router;