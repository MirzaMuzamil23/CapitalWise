const {Schema} = require('mongoose');

const HoldingsSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
    ,
    qty: {
        type: String,
        required: true,
    },
    avg: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    net: String,
    day: String,
});


module.exports = {HoldingsSchema};