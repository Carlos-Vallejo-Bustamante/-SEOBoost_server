module.exports = (app) => {
    app.use('/api/seller', require('./seller.routes'));
}