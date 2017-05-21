'use strict';

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
const conn = mongoose.connect('mongodb://localhost:27017/educare');
autoIncrement.initialize(conn);

const questionSchema = new Schema({
  id: Number,
  user_id: Number,
  image: String,
  category: String,
  body: { type: String, required: true }
});

const answerSchema = new Schema({
  id: Number,
  question_id: Number,
  body: { type: String, required: true },
});

questionSchema.plugin(autoIncrement.plugin, { model: 'questions', field: 'id' });

module.exports = {
  questions: mongoose.model('questions', questionSchema),
  answers: mongoose.model('answers', answerSchema)
};
