const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: ObjectId,
    ref: 'TagCategory'
  },
});

module.exports = mongoose.model('Tag', tagSchema);