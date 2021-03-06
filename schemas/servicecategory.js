const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId }} = Schema;
const servicecategorySchema = new Schema({
  name:{
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ServiceCategory', servicecategorySchema);