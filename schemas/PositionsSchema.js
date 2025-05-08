const {Schema} = require('mongoose'); 


const PostionsSchema = new Schema({
    product: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    avg: {
        type: String,
        
    },
    price: {
        type: Number,
        required: true,
    },
    net: {
        type: String,
        
    },
    day: {
        type: String,
        
    },
    isLoss: {
        type: Boolean,
        
    },
});




module.exports = PostionsSchema;