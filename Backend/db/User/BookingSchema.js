const mongoose =require('mongoose')

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phno: String,
    date: String,
    time: String,
    userId: String,
    userName: String,
    address: {
        district: String,
        city: String,
        state: String,
        country: String,
        zipcode: String,
        street_address: String,
      },

  });

module.exports= mongoose.model('Booking', bookingSchema);