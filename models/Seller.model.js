const { Schema, model } = require("mongoose");

const sellerSchema = new Schema(
    {
        company: { type: String },
        name: { type: String },
        url: { type: String },
        price: { type: String },
        country: { type: String },
        domainAuthority: { type: String },
        domainRef: { type: String },
        traffic: { type: String },
    },
    {
        timestamps: true,
    }
);

const SellerModel = model("Seller", sellerSchema);

module.exports = SellerModel;