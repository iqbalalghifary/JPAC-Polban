const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const News = mongoose.model('news', NewsSchema);
module.exports = News;
