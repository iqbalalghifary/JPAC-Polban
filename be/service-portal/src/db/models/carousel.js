const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarouselScheme = new Schema({
  foto: {
    type: String,
    required: true
  },
  status: {
    type: Enum,
    required: true
  }
});

const Carousels = mongoose.model('carousel', CarouselScheme);
module.exports = Carousels;
