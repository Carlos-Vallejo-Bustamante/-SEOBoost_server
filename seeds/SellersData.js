require('dotenv/config');
const mongoose = require('mongoose');
const SellerModel = require('../models/Seller.model');
const Conexoo = require('./conexoo.json');
const Linkatomic = require('./linkatomic.json');
const Prensalink = require('./prensalink.json');
const Prensarank = require('./prensarank.json');
const Publisuites = require('./publisuites.json');
const Teblogueo = require('./teblogueo.json');
const Triskelink = require('./triskelink.json');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/final-project';

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .then(() => {
        let allData = [...Linkatomic, ...Conexoo, ...Prensalink, ...Prensarank, ...Publisuites, ...Teblogueo, ...Triskelink]
        console.log('PRIMERA DATA ========>', allData)
        return SellerModel.insertMany(allData);
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
