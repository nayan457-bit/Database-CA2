const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String
    }
});

restaurantSchema.index({ name:1, address:2}, { unique: true });

const menuItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = { Restaurant, MenuItem };