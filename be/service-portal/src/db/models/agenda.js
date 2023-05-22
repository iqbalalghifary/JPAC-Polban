const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgendaScheme = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Agendas = mongoose.model('agenda', AgendaScheme);
module.exports = Agendas;
