const { Schema, model } = require("mongoose");

const sellerSchema = new Schema(
    {
        company: { type: String },
        name: { type: String },
        url: { type: String },
        price: { type: String },
        country: { type: String },
        domainAuthority: { type: Number },
        domainRef: { type: Number },
        traffic: { type: Number },
    },
    {
        timestamps: true,
    }
);

const User = model("Seller", sellerSchema);

module.exports = User;