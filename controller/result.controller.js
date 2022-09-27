const { isValidObjectId } = require('mongoose');
const SeoService = require('../services/axios.service')
const seoData = new SeoService()

const getSearch = (req, res, next) => {
    const result = req.body
    console.log('aqui el analisis!!===>', result.url)
    seoData.getSearch(result.url)
        .then((results) => {
            // console.log('ESTOY LLEGANDO A ESTA RUTA', results)
            res
                .status(200)
                .json(results.data);
        })
        .catch(next);
};



module.exports = {
    getSearch,
};
