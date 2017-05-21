'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/educare');

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

module.exports = {
  questions: mongoose.model('questions', questionSchema),
  answers: mongoose.model('answers', answerSchema)
};
