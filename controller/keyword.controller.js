const KeywordService = require('../services/axiosKeyword.service');
const seoKeyword = new KeywordService()

const getKeywords = (req, res, next) => {
    const { search, country } = req.body
    seoKeyword
        .getKeywords(search, country)
        .then(({ googleGuggestedKeywords }) => {
            res.status(200)
                .json(googleGuggestedKeywords)
        })
        .catch(next)
}

module.exports = { getKeywords };