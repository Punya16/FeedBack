const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  image: String,
  textData: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
