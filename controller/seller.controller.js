const { isValidObjectId } = require('mongoose');
const SellerModel = require('../models/Seller.model');


const getAll = (req, res, next) => {
    let sellers;
    SellerModel
        .find()
        .then((sellersData) => {
            sellers = sellersData;
            console.log('AQUI LA DATA====>', sellersData)
            return SellerModel.countDocuments();
        })
        .then((countSeller) => {
            res
                .status(200)
                .json({
                    results: sellers,
                });
        })
        .catch(next);
};


module.exports = {
    getAll,
};
