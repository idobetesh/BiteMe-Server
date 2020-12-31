const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    address: { type: String },
    price: { type: Number },
    rate: { type: Number },
    open: { type: Boolean },
    count: { type: Number }
}, { collection: 'restaurants' });

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;