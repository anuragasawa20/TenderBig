const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const optionsModelSchema = new Schema({
  sectors: [{
    type: String,
    required: true
  }],
  products: [{
    type: String,
    required: true
  }],
  departments: [{
    type: String,
    required: true
  }],
  categories: [{
    type: String,
    required: true
  }]
});

const optionsModel = mongoose.model('options', optionsModelSchema);

module.exports = optionsModel;
