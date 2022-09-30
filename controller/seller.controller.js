const { isValidObjectId } = require('mongoose');
const SellerModel = require('../models/Seller.model');

const getAll = (req, res, next) => {
    const { url } = req.body
    console.log('AQUIII', url);
    SellerModel
        .find({ url })
        .then((results) => {
            res
                .status(200)
                .json({
                    results,
                });
        })
        .catch(next);
};




module.exports = {
    getAll,
    /* getSearch */
};
