const router = require('express').Router();

const { LoginController, SignupController
} = require('../controller/auth.controller');
/**
 * GET
 */


/**
 * POST
 */
router.post('/signup', SignupController);
router.post('/login', LoginController);

/**
 * PUT
 */


/**
 * DELETE
 */


module.exports = router;
