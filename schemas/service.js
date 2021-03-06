const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const serviceSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  apikey: {
    type: String,
    required: true,
  },
  consumer_age: {
    type: Number,
    required: true,
    default: 0,
  },
  company: {
    type: ObjectId,
    ref: 'Company'
  },
  tags: [
    {
      type: ObjectId,
      ref: 'Tags'
    }
  ],
  antitags: [
    {
      type: ObjectId,
      ref: 'Tags'
    }
  ],
  category: {
    type: ObjectId,
    ref: 'ServiceCategory'
  },
  data_created: {
    type: Date,
    default: Date(),
  },
  data_fix: {
    type: Date,
    default: Date(),
  },
});

module.exports = mongoose.model('Service', serviceSchema);