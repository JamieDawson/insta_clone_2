const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId; //use objectid as an actual type

const postSchema = Schema({
  user_id: {
    type: ObjectId,
    require: true
  },
  display_name: { type: String, require: true },
  image: {
    type: String,
    require: true
  },
  desc: {
    type: String,
    require: false
  },
  timestamp: {
    type: String,
    default: Date.now()
  }
});

const model = mongoose.model('post', postSchema); //post is name.

module.exports = model;
