const { Schema, model } = require("mongoose");

const sellerSchema = new Schema(
    {
        nombre: { type: String },
        nombre_href: { type: String },
        precio: { type: String },
        pais: { type: String },
        autoridad: { type: Number },
        dominiosDeRef: { type: Number },
        trafico: { type: Number },
    },
    {
        timestamps: true,
    }
);

const User = model("Seller", sellerSchema);

module.exports = User;