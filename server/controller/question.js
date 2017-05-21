'use strict';

const mockData = require('../mock');
const db = require('../model/question');

exports.getOne = (ctx, next) => {
  let question = mockData.questions.filter((question) => {
    return question.id == ctx.params.id;
  });

  let answers = mockData.answers.filter((answer) => {
    return answer.question_id == ctx.params.id;
  });

  if (!question.length) ctx.status = 404;
  else ctx.response.body = { question, answers };
};

exports.getCategoryQuestions = (ctx, next) => {
  let questions = mockData.questions.filter((question) => {
    return question.category.toLowerCase() === ctx.params.category.toLowerCase();
  });
  if (questions.length === 0) ctx.status = 404;
  else ctx.response.body = questions;
};

exports.postOne = async (ctx, next) => {
  let question = new db.questions(
    {
      user_id: 1,
      body: JSON.stringify(ctx.request.body.question),
      image: '/blablabla.png',
      category: 'Nature'
    }
  );

  // Save the question and set
  await question.save();
  ctx.response.status = 200;
};
