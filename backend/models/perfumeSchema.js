const mongoose = require("mongoose");

const perfumeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        aroma: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        }
    }
)

module.exports.Perfume = mongoose.model('Perfume', perfumeSchema )