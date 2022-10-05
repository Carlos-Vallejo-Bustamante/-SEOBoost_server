const router = require('express').Router();
const {
    getAvatar,
} = require('../controller/avatar.controller');
const multerMiddleware = require('../middleware/multer.middleware');

/**
 * GET
 */
router.post('/', multerMiddleware.single('avatar'), getAvatar);


module.exports = router;
