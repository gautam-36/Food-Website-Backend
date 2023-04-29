const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    menu: [{
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        image: { type: String },
        available: { type: Boolean, required: true }
    }],

});

module.exports = mongoose.model('Restaurant', RestaurantSchema);

