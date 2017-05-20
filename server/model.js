const mongoose = require('mongoose')
const Schema = mongoose.Schema;
moongoose.connect('mongodb://localhost/myappdatabase')

const questionSchema = new Schema({
  id: Number,
  user_id: Number,
  body: { type: String, required: true },
  image:
  category: String
});

const answerSchema = new Schema({
  id: Number,
  question_id: Number,
  body: { type: String, required: true },
});

const questions = mongoose.model('questions', questionSchema);
const answers = mongoose.model('answers', answerSchema);
