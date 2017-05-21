'use strict';

const app = require('koa');
const router = require('koa-router')();
const mockData = require('./mock');
const db = require('./model/question');
const question = require('./controller/question');

// GET a question based on :id and its answers
router.get('/questions/:id', question.getOne);

// GET questions based on a :category
router.get('/questions/cat/:category', question.getCategoryQuestions);

// POST a question
router.post('/questions', question.postOne);

// post an answer to an specific question
// post /answers/:q_id


// Extra
// post /ratings/:a_id
// get /ratings/:a_id


// get all questions
// .get('/questions', (ctx, next) => {
//   ctx.response.body = db.msgs;
// })



// router.post('/messages', ctrlMessages.postMsgs);
// router.get('/messages', ctrlMessages.getAll);
// router.post('/all', ctrlMessages.postAll);

module.exports = router;
