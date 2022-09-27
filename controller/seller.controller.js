const { isValidObjectId } = require('mongoose');
const SellerModel = require('../models/Seller.model');

const getAll = (req, res, next) => {
    SellerModel
        .find()
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
    getSearch,
};
