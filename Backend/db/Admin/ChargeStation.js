const mongoose = require('mongoose');



const chargeStationSchema = new mongoose.Schema({
  name: String,
  address_components: {
    district: String,
    street_address: String,
    city: String,
    zipcode: String,
    state: String,
    country: String,
  },
  latitude: Number,
  longitude: Number,
  phone_number: String,
  opening_hours: String,
  rating: Number,   
  review_count: Number,

});

module.exports = mongoose.model('ChargeStation', chargeStationSchema);
