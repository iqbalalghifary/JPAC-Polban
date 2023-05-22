const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnouncementScheme = new Schema({
  judul: {
    type: String,
    required: true
  },
  foto: {
    type: Number,
    required: true
  }
});

const Announcements = mongoose.model('announcement', AnnouncementScheme);
module.exports = Announcements;
