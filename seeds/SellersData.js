require('dotenv/config');
const mongoose = require('mongoose');
const SellerModel = require('../models/Seller.model');
const PrensarankData = require('./inputPrensarank.json');
const TeblogueoData = require('./teblogueo');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/final-project';

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .then(() => {
        return SellerModel.insertMany(PrensarankData, TeblogueoData);
    })
    .then(() => {
        console.log('data created');
    })
    .catch((err) => {
        console.error('Error connecting to mongo: ', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });
